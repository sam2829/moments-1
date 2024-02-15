const baseURL = "https://crf-api-1-952b00a16d56.herokuapp.com/";
import { rest } from "msw";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 9,
                "username": "harry28",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 9,
                "profile_image": "https://res.cloudinary.com/dc8vjzinx/image/upload/v1/media/images/mj11_yzyqb9"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];