import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateDailyNotesDto {
  @IsNotEmpty()
  @ApiProperty()
  date: Date;

  @IsNotEmpty()
  @ApiProperty()
  locationDescription: string;

  @ApiProperty()
  @IsOptional()
  notes: string;

  userId: string;
}
