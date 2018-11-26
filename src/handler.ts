import { APIGatewayEvent, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
    event: any,
    context: Context,
) => {
    return `Hello From Aws Lambda!`;
};
