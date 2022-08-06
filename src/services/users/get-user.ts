import type { ApiContext, User } from 'types';
import { fetcher } from "../../utils";

export type GetUserParams = {
    /**
     * ユーザーID
     */
    id: number
}

/**
 * ユーザーAPI (個別取得)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
const getUser = async (
    context: ApiContext,
    { id }: GetUserParams,
): Promise<User> => {
    /**
     * ユーザーAPI
     * サンプルレスポンス
    {
        "id": "1",
        "username": "ogawa",
        "displayName": "Ogawa",
        "email": "user@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simpy dummy text of the priting and  typesetting industry."
    }
    */
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g), ''}/users/${id}`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
    )
 }

 export default getUser
