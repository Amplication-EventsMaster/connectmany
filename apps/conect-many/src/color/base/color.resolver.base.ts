/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Color } from "./Color";
import { ColorCountArgs } from "./ColorCountArgs";
import { ColorFindManyArgs } from "./ColorFindManyArgs";
import { ColorFindUniqueArgs } from "./ColorFindUniqueArgs";
import { CreateColorArgs } from "./CreateColorArgs";
import { UpdateColorArgs } from "./UpdateColorArgs";
import { DeleteColorArgs } from "./DeleteColorArgs";
import { Customer } from "../../customer/base/Customer";
import { ColorService } from "../color.service";
@graphql.Resolver(() => Color)
export class ColorResolverBase {
  constructor(protected readonly service: ColorService) {}

  async _colorsMeta(
    @graphql.Args() args: ColorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Color])
  async colors(@graphql.Args() args: ColorFindManyArgs): Promise<Color[]> {
    return this.service.colors(args);
  }

  @graphql.Query(() => Color, { nullable: true })
  async color(
    @graphql.Args() args: ColorFindUniqueArgs
  ): Promise<Color | null> {
    const result = await this.service.color(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Color)
  async createColor(@graphql.Args() args: CreateColorArgs): Promise<Color> {
    return await this.service.createColor({
      ...args,
      data: {
        ...args.data,

        customers: args.data.customers
          ? {
              connect: args.data.customers,
            }
          : undefined,

        likedColors: args.data.likedColors
          ? {
              connect: args.data.likedColors,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Color)
  async updateColor(
    @graphql.Args() args: UpdateColorArgs
  ): Promise<Color | null> {
    try {
      return await this.service.updateColor({
        ...args,
        data: {
          ...args.data,

          customers: args.data.customers
            ? {
                connect: args.data.customers,
              }
            : undefined,

          likedColors: args.data.likedColors
            ? {
                connect: args.data.likedColors,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Color)
  async deleteColor(
    @graphql.Args() args: DeleteColorArgs
  ): Promise<Color | null> {
    try {
      return await this.service.deleteColor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customers",
  })
  async getCustomers(
    @graphql.Parent() parent: Color
  ): Promise<Customer | null> {
    const result = await this.service.getCustomers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "likedColors",
  })
  async getLikedColors(
    @graphql.Parent() parent: Color
  ): Promise<Customer | null> {
    const result = await this.service.getLikedColors(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
