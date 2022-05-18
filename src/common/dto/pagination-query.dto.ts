import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @IsPositive()
    offset: number;
    // @Type(() => Number)  because there is tranform option convert implict types not needed. 
}
