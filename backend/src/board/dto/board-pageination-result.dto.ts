import { Board } from '../entities/board.entity';

export class BoardItemsPaginationDTO {
  readonly data: Board[];
  readonly page: number;
  readonly limit: number;
  readonly totalCount: number;
}
