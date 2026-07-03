/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Habilita o formulario opcional de "avise-me" (envio via php/contact-mailer.php). "true" para ativar. */
  readonly VITE_ENABLE_NOTIFY?: string;
  /** Endpoint do mailer PHP. Padrao: /php/contact-mailer.php */
  readonly VITE_MAILER_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
