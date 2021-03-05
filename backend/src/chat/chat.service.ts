import { Injectable } from '@nestjs/common';
import { ChatMessage, ChatRoom } from './entities/chat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMessageDTO } from './dto/create-message.dto';
import { User, Tweet } from './entities/test.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatMessage)
    private readonly messageRepository: Repository<ChatMessage>,

    @InjectRepository(ChatRoom)
    private readonly roomRepository: Repository<ChatRoom>, // private readonly config: ConfigService, // ConfigService 불러오기

    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>, // private readonly config: ConfigService, // ConfigService 불러오기

    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // private readonly config: ConfigService, // ConfigService 불러오기
  ) {}

  // 채팅 로그 저장
  async createMessage(messageData: CreateMessageDTO): Promise<ChatMessage> {
    const message = new ChatMessage();
    const room = new ChatRoom();

    message.room_key = messageData.room_key;
    message.from_user = messageData.from_user;
    message.to_user = messageData.to_user;
    message.nickname = messageData.nickname;
    message.profile = messageData.profile;
    message.insert_datetime = messageData.insert_datetime;
    message.message_type = messageData.message_type;
    message.source = messageData.source;
    message.message = messageData.message;

    await this.messageRepository.save(message);

    const currentRoom = await this.roomRepository.findOne({
      room_key: messageData.room_key || '',
    });

    if (currentRoom) {
      // Chat Room Log
      // 이미 존재하는 room 정보이면 UPDATE
      room.last_message = messageData.message;
      room.last_datetime = messageData.insert_datetime;

      await this.roomRepository.update(
        { room_key: messageData.room_key },
        room,
      );
    } else {
      // Chat Room Log
      room.room_key = messageData.room_key;
      room.last_message = messageData.message;
      room.last_datetime = messageData.insert_datetime;
      room.user_A = 'UserA';
      room.user_B = 'UserB';

      await this.roomRepository.save(room);
    }

    return message;
  }

  // room_key로 채팅로그 불러오기

  async getMessages(room_key: string): Promise<ChatMessage[]> {
    return await this.messageRepository.find({ room_key });
  }

  async test(): Promise<void> {
    const user = new User();
    user.firstName = 'mun';
    user.lastName = 'hakju';
    user.age = 11;

    await this.userRepository.save(user);

    const tweet = new Tweet();
    tweet.title = 'hahahaha';
    tweet.content = 'conteeeent';
    tweet.user = user;

    await this.tweetRepository.save(tweet);

    // const test = await this.tweetRepository.find({ relations: ['user'] });
    // console.log(test);

    const test2 = await this.tweetRepository
      .createQueryBuilder('tweet')
      .leftJoinAndSelect('tweet.user', 'user')
      .getMany();

    // .getRepository(Photo)
    // .createQueryBuilder("photo") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
    // .innerJoinAndSelect("photo.metadata", "metadata")
    // .leftJoinAndSelect("photo.albums", "album")
    // .where("photo.isPublished = true")
    // .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
    // .orderBy("photo.id", "DESC")
    // .skip(5)
    // .take(10)
    // .setParameters({ photoName: "My", bearName: "Mishka" })
    // .getMany();

    console.log(test2);

    const test3 = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.tweets', 'tweets')
      .getMany();

    // test3.map((item) => {
    //   console.log(item);
    // });
  }
}
