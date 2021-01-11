import React, {useState, useEffect} from 'react'
    import Router from 'next/router';
    import {useSelector} from 'react-redux'
    import DatePicker from 'react-datepicker';
    import axios from 'axios';
    import ImageSelector from './ImageSelector'
    import  CheckBox  from './CheckBox'
    import dynamic from 'next/dynamic'
    import { EditorState, convertToRaw, ContentState } from 'draft-js';
    import {stateToHTML} from 'draft-js-export-html'
    import draftToHtml from 'draftjs-to-html';
    import slug from 'limax';
    // import htmlToDraft from 'html-to-draftjs';
    let underscore;

    const Editor = dynamic(() =>
    import('react-draft-wysiwyg').then(mod => mod.Editor), {
        ssr: false
    })

    const AddPost = (props) => {

      const ref = React.createRef();
      const [title, setTitle] = useState(props.post?props.post.title:'') 
      const [slugg, setSlug] = useState(props.post?props.post.slug:'')
      const [hits,setHits] = useState(props.post?props.post.hits:'')
      const [subtitle, setSubTitle] = useState(props.post?props.post.subtitle:'')
      const [categoryname, setCategoryname] = useState(props.post?props.post.categoryname:'')
      const [prevCategories, setprevCategoies] = useState(props.post?props.post.categoryname:'')
      const [description, setDescription] = useState(props.post?props.post.description:'') 
      const [author, setAuthor] = useState(props.post?props.post.author:'')
      const [location, setLocation] = useState(props.post?props.post.location:'')
      const [date, setDate] = useState(new Date(props.post?props.post.date:new Date())) 
      const [actor, setActor] = useState(props.post?props.post.actor:[]) 
      const [id, setId] = useState() 
      const [imagepath, setImagepath] = useState(props.post?props.post.imagepath:'')
      const [imagecaption, setImagecaption] = useState(props.post?props.post.imagecaption:'')
      const [show, setShow] = useState(props.post?props.post.show:'')
      const [categories, setCategories] = useState([]) 
      const [poststatus, setPoststatus] = useState(props.post?props.post.poststatus:'')
      const [error, setError] = useState([])
      const [editorState, setEditorState]= useState(EditorState.createEmpty()) 
      const [editorImages, setEditorImages] = useState([])

      useEffect(() => {
        dynamicImportFunc()
        fetchCategories()
      }, [])

      const dynamicImportFunc = async () => {
        if (typeof window !== 'undefined') {
          const { default: htmlToDraft} = await import('html-to-draftjs')
          // convertHtmlToDraft = htmlToDraft
          if(props.post){
            const contentBlock = htmlToDraft(props.post.description)
            console.log("CONTENTBLOCK", contentBlock)
              if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
                const editorState = EditorState.createWithContent(contentState)
                console.log(editorState)

                setEditorState(editorState)
              }
            }
        }

      }

    //------------------------------------------------------------
    // //--------------------------CATEGORY--------------------------
    const fetchCategories = () => {
      axios.get('http://localhost:5000/categories')
      .then(response => {
          let categories = []
          response.data.forEach(cat => {
            let category = {
              _id: cat._id,
              name: cat.categorytitle,
              slug: cat.categoryslug,
              parent: cat.parentCategory,
              isChild: cat.isChild,
              isChecked: prevCategories.includes(cat.categoryslug),
              hasChildren: false
            }
            if(!cat.isChild){
              let children = []
              response.data.forEach(childCat => {
                if(childCat.parentCategory && childCat.parentCategory === cat.categoryslug){
                  children.push(childCat.categoryslug)
                }
              })
              if(children.length > 0){
                category.hasChildren = true
                category = {...category, children: children}
              }
            }

            categories.push(category)
          })
          setCategories(categories)
      })
      .catch((error) => {
          console.log(error);
      })
    }

    const handleAllChecked = (event) => {
      let categoriess = categories
      categoriess.forEach(category => category.isChecked = event.target.checked) 
      setCategories(categoriess) 
      console.log(categoriess)
    }

    const handleCheckChieldElement = (event) => {
      let categoriess = categories 
      categoriess.forEach(category => {
         if (category.name === event.target.value){
            category.isChecked =  event.target.checked
            console.log(category.name)
            categories.forEach(parentCat => {
              if(category.parent === parentCat.slug){
                parentCat.isChecked = true
              }
            })
          }
      })
      setCategories(categoriess) 
    }


    //--------------------------------------------------
    //-----------------POST DESCRIPTION-----------------

      const onChangeTitle = (e) => {
        setTitle(e.target.value) 
      }
      const onChangeSubTitle = (e) => {
        setSubTitle(e.target.value)
      }


      const onChangeDescription = (editorState) => {
          setEditorState(editorState)
      }

      const embedCallback = (embeddedLink) => {
        if (embeddedLink.indexOf("youtube") >= 0){
          embeddedLink = embeddedLink.replace("watch?v=","embed/");
          embeddedLink = embeddedLink.replace("/watch/", "/embed/");
          embeddedLink = embeddedLink.replace("youtu.be/","youtube.com/embed/");
        }
        return embeddedLink
      }

      const uploadCallback = (file) => {
        let uploadedImages = editorImages;

        const formData = new FormData();
        formData.append('file', file);

        return new Promise((resolve, reject) => {
          axios.post('http://localhost:5000/Images/uploadImage', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
          })
          .then( res => {
            console.log(res.data)
            const imageObject = {
              file: file,
              localSrc: res.data,
            }

            uploadedImages.push(imageObject)

            setEditorImages(uploadedImages) 

            resolve({ data: { link: res.data } });
            console.log(res.data)
          })
          .catch(error => {
              console.log(error)
              reject(error.toString())
          })

        })   

      }

      const convertDescriptionFromJSONToHTML = () => {
        try{
          return { __html: stateToHTML(editorState.getCurrentContent())} 
        } catch(exp) {
          console.log(exp)
          return { __html: 'Error' }
        }
      }

      const onChangeAuthor = (e) => {
        setAuthor(e.target.value) 
      }
      const onChangeLocation = (e) => {
        setLocation(e.target.value)
      }
      const onChangeDate = (date) => {
        setDate(date) 
      }
      const onChangeSlug = (e) => {
        setSlug(e.target.value)

      }
      const slugchange = (e) => {
        e.preventDefault()
        underscore = slug(title, '-')
        setSlug(underscore) 
      }
      const onSubmit = (e) => {
        e.preventDefault()
        savePost(false)
      }

      const savePost = (isDraft) => {

        let descHTML =  draftToHtml(convertToRaw(editorState.getCurrentContent()))
        if(
          (title ==='') || (author ==='') 
          || (location ==='') || (date ==='') 
          || (imagepath ==='') || (categoryname ===[]) 
          || (slugg ==='')
        )
        {
          alert('Please fill the fileds')
          return false
        }
        let selectcatg = []
        categories.forEach(catg => {
          if(catg.isChecked) 
            selectcatg.push(catg.slug)
        })
        const post = {
          title: title,
          subtitle: subtitle,
          description: descHTML,
          author: author,
          location: location,
          date: date,
          imagepath: imagepath,
          imagecaption:imagecaption,
          categoryname: selectcatg,
          slug: slugg,
          hits: hits,
          poststatus: isDraft ? 'draft' : 'published'
        }



        if(props.post){
          axios.put('http://localhost:5000/posts/'+id,  post)   
          .then(res => {
            console.log(res.data)
            alert('Post Updated Successfully')
            setPoststatus('Published')
          })
          .catch(err => console.log(err))
        }
        else{
          axios.post('http://localhost:5000/posts/addpost/', post)
          .then(  res => {
            console.log("RUNNING")
            if(res.status !== 200){
              console.log(res.status)
              return
            }
            alert('Post saved Successfully')
            setPoststatus('Draft')
          })
          .catch(error => {
            console.log("ERROR:",error)
          })
        }


      }

    const showModal = () => {
      setShow(true)
    };

    const hideModal = () => {
      setShow(false)
    };

      const setFeaturedImage = (path, caption) => {
        setImagepath(path)
        setImagecaption(caption)
      }



        return (
            <div style={{width:'100%',overflow:'hidden'}}>
              <div style={{width:'100%',height:50,backgroundColor:'#1abc9c', color:'#ffffff',textAlign:'left'}}>
                <h1 style={{marginLeft:150,textShadow:'5px 5px 5px #5a5a5a'}}>Add Post Here</h1>
              </div>
              <div className="addpost" >
                      <form noValidate onSubmit={onSubmit} className="formadd">
                          <div className="firstcolumn">
                            <div className="titleslug">
                              <div className="title">
                                  <input type="text"
                                  className="title"
                                  placeholder="Enter Title"
                                  value={title}
                                  onChange={onChangeTitle}/>
                              </div>
                              <button className="slugbutton" onClick={slugchange}>Generate Slug</button><br/><br/>
                            </div><br/>
                            <div className="slug-group">
                                <input type="text"
                                className="slug"
                                name="slug"
                                onClick={slugchange}
                                ref={ref}
                                placeholder="Enter Slug"
                                value={slugg}
                                onChange={onChangeSlug}/>
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text"
                                className="subtitle"
                                placeholder="Enter Subtitle"
                                value={subtitle}
                                onChange={onChangeSubTitle}/>
                            </div><br/>
                            <div>
                            <input style={{height:'300px'}} type="text"
                                className="subtitle"
                                placeholder="Enter Subtitle"
                                value={editorState}
                                onChange={onChangeDescription}/>
                              <Editor
                                initialEditorState={editorState}
                                wrapperClassName="wrapper-class"
                                editorClassName="editor-class"
                                toolbarClassName="toolbar-class"
                                wrapperStyle={{ }}
                                editorStyle={{ height: "300px", padding: "10px"}}
                                // toolbarStyle={<toolbarStyleObject>}
                                onEditorStateChange={onChangeDescription}
                                toolbar={{ 
                                  image: { uploadCallback: uploadCallback, previewImage: true },
                                  embedded: { embedCallback: embedCallback }
                                }}
                              />
                            </div><br/>

                            <div className="authorloction">
                              <div className="author">
                                  <label htmlFor="author">Author:</label>
                                  <input type="text"
                                  className="author"
                                  name="author"
                                  placeholder="Enter Author Name"
                                  value={author}
                                  onChange={onChangeAuthor}/>
                              </div>
                              <div className="location">
                                  <label htmlFor="location">Location:</label>
                                  <input type="text"
                                  className="location"
                                  name="location"
                                  placeholder="Enter Location"
                                  value={location}
                                  onChange={onChangeLocation}/>
                              </div>
                            </div>
                          </div>
                          <div className="secondcolumn">
                            <h5>Select Category</h5>
                            <div className="category" >
                              <input className="checkbox" type="checkbox" onClick={handleAllChecked}  value="checkedall" /> Check / Uncheck All
                                <ul>
                                {
                                  categories.map(category => {
                                    return (<span>
                                      {category.hasChildren 
                                        ? <span><CheckBox key={category._id} 
                                        handleCheckChieldElement={handleCheckChieldElement}  {...category} />
                                        <ul>
                                          {
                                          category.children.map(child => {
                                            return (
                                              <h5>
                                                {
                                                categories.sort().map(childCategory => {
                                                return (<span>{
                                                  childCategory.slug === child 
                                                  ? <CheckBox key={childCategory._id} handleCheckChieldElement={handleCheckChieldElement}  {...childCategory} />
                                                  : ""
                                                }</span>)                                       
                                              })
                                            }
                                            </h5>
                                            )
                                          })
                                        }   
                                        </ul>
                                        </span>                          
                                        : category.isChild ? "" : <CheckBox key={category._id} handleCheckChieldElement={handleCheckChieldElement}  {...category} />
                                      }
                                    </span>)
                                  })
                                }
                                </ul>
                            </div>

                            <main>
                              <ImageSelector show={show} handleClose={hideModal} setFeaturedImage={setFeaturedImage}/>
                              <button className="featuredimage" type="button" onClick={showModal}>
                                  Featured Image
                              </button><br/><br/>
                              <img src={imagepath} alt=''></img><br/>
                              <label>Image Caption: {imagecaption}</label><br/>
                            </main>

                            <label>Publish Date</label> <DatePicker
                            className="datepicker"
                                selected={date}
                                onChange={onChangeDate}
                            />
                            <label>Status:{poststatus}</label>
                            <button className="draftbutton" onClick={(e) => {e.preventDefault();savePost(true)}} >
                                Save as draft
                            </button>
                            <button className="publishbutton" onClick={(e) => {e.preventDefault();savePost(false)}}>
                                Publish
                            </button>
                          </div><br/>
                      </form>
                  </div>
          </div>
        )
    }


    export default AddPost