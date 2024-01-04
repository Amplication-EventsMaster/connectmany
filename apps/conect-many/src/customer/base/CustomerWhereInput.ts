/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ColorListRelationFilter } from "../../color/base/ColorListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class CustomerWhereInput {
  @ApiProperty({
    required: false,
    type: () => ColorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ColorListRelationFilter)
  @IsOptional()
  @Field(() => ColorListRelationFilter, {
    nullable: true,
  })
  favoriteColors?: ColorListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ColorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ColorListRelationFilter)
  @IsOptional()
  @Field(() => ColorListRelationFilter, {
    nullable: true,
  })
  likedColors?: ColorListRelationFilter;
}

export { CustomerWhereInput as CustomerWhereInput };
