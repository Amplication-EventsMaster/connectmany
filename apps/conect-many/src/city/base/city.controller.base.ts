/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CityService } from "../city.service";
import { CityCreateInput } from "./CityCreateInput";
import { City } from "./City";
import { CityFindManyArgs } from "./CityFindManyArgs";
import { CityWhereUniqueInput } from "./CityWhereUniqueInput";
import { CityUpdateInput } from "./CityUpdateInput";

export class CityControllerBase {
  constructor(protected readonly service: CityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: City })
  async createCity(@common.Body() data: CityCreateInput): Promise<City> {
    return await this.service.createCity({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [City] })
  @ApiNestedQuery(CityFindManyArgs)
  async cities(@common.Req() request: Request): Promise<City[]> {
    const args = plainToClass(CityFindManyArgs, request.query);
    return this.service.cities({
      ...args,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async city(
    @common.Param() params: CityWhereUniqueInput
  ): Promise<City | null> {
    const result = await this.service.city({
      where: params,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCity(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() data: CityUpdateInput
  ): Promise<City | null> {
    try {
      return await this.service.updateCity({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCity(
    @common.Param() params: CityWhereUniqueInput
  ): Promise<City | null> {
    try {
      return await this.service.deleteCity({
        where: params,
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
