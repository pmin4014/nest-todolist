import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    //영어랑 숫자만 사용가능한 유효성 체크, 에러 생길때 메세지 전달
    @Matches(/^[a-zA-Z0-9]*$/, {message:'password only accepts english and number'})
    password: string;
}