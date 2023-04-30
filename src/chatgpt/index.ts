import * as openai from "openai";

/**
 * ChatGPTクラス
 */
export class ChatGPT {
  private client: openai.OpenAIApi;
  private contexts: openai.ChatCompletionRequestMessage[] = [];

  /**
   * コンストラクタ
   */
  constructor() {
    const config = new openai.Configuration({
      apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
    });
    this.client = new openai.OpenAIApi(config);
  }

  /**
   * メッセージを送信してレスポンスを得る
   * @param message メッセージ
   * @param saveAsContext コンテキストとして保存するか？
   */
  async sendMessage(message: string, saveAsContext: boolean): Promise<string> {
    const sendValue: openai.ChatCompletionRequestMessage = {
      role: "user",
      content: message,
    };
    const sendContext = [...this.contexts, sendValue];
    try {
      const response = await this.client.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: sendContext,
      });
      if (!response.data.choices[0].message) {
        throw response;
      }

      if (saveAsContext) {
        this.contexts.push(sendValue);
        this.contexts.push(response.data.choices[0].message);
      }
      return response.data.choices[0].message.content;
    } catch (error: any) {
      alert(error.message ?? "エラー");
      throw error;
    }
  }
}
