export interface ChatMessage {
    body: string;
    userNickname?: string;
    isSystemMessage: boolean;
    timestamp: number;
    userIcon?: string;
  }
  