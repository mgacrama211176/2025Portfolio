export {};

declare global {
  interface Window {
    claude?: {
      complete: (args: {
        messages: { role: "user" | "assistant"; content: string }[];
      }) => Promise<string>;
    };
  }
}
