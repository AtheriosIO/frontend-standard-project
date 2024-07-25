/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PORT: number;
  readonly VITE_API_PRIVATE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
