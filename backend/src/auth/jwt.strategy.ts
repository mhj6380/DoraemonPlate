import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy,VerifiedCallback } from "passport-jwt";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'doraemonPlateHakgu6380'
    })
  }

  async validate(payload: any, done: VerifiedCallback) {
    const user = await this.authService.getOne(payload.user_id);
    return done(null, user, payload.iat);
  }
} 