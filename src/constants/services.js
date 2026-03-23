export const serviceFields = {
    OpenAI: [
        { name: 'openai_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'openai_model', label: 'serviceFields.model', type: 'text', placeholder: 'gpt-4o-mini' },
        { name: 'openai_base_url', label: 'serviceFields.baseUrl', type: 'text', placeholder: 'https://api.openai.com/v1' },
    ],
    AzureOpenAI: [
        { name: 'azure_openai_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'azure_openai_base_url', label: 'serviceFields.baseUrl', type: 'text' },
        { name: 'azure_openai_model', label: 'serviceFields.model', type: 'text', placeholder: 'gpt-4o-mini' },
        { name: 'azure_openai_api_version', label: 'serviceFields.apiVersion', type: 'text', placeholder: '2024-06-01' },
    ],
    DeepSeek: [
        { name: 'deepseek_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'deepseek_model', label: 'serviceFields.model', type: 'text', placeholder: 'deepseek-chat' },
    ],
    Ollama: [
        { name: 'ollama_host', label: 'serviceFields.host', type: 'text', placeholder: 'http://localhost:11434' },
        { name: 'ollama_model', label: 'serviceFields.model', type: 'text', placeholder: 'gemma2' },
    ],
    Xinference: [
        { name: 'xinference_host', label: 'serviceFields.host', type: 'text' },
        { name: 'xinference_model', label: 'serviceFields.model', type: 'text', placeholder: 'gemma-2-it' },
    ],
    ModelScope: [
        { name: 'modelscope_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'modelscope_model', label: 'serviceFields.model', type: 'text', placeholder: 'Qwen/Qwen2.5-32B-Instruct' },
    ],
    Zhipu: [
        { name: 'zhipu_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'zhipu_model', label: 'serviceFields.model', type: 'text', placeholder: 'glm-4-flash' },
    ],
    SiliconFlow: [
        { name: 'siliconflow_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'siliconflow_model', label: 'serviceFields.model', type: 'text', placeholder: 'Qwen/Qwen2.5-7B-Instruct' },
        { name: 'siliconflow_base_url', label: 'serviceFields.baseUrl', type: 'text', placeholder: 'https://api.siliconflow.cn/v1' },
    ],
    TencentMechineTranslation: [
        { name: 'tencentcloud_secret_id', label: 'serviceFields.secretId', type: 'password' },
        { name: 'tencentcloud_secret_key', label: 'serviceFields.secretKey', type: 'password' },
    ],
    Gemini: [
        { name: 'gemini_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'gemini_model', label: 'serviceFields.model', type: 'text', placeholder: 'gemini-1.5-flash' },
    ],
    Azure: [
        { name: 'azure_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'azure_endpoint', label: 'serviceFields.endpoint', type: 'text', placeholder: 'https://api.translator.azure.cn' },
    ],
    AnythingLLM: [
        { name: 'anythingllm_apikey', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'anythingllm_url', label: 'serviceFields.url', type: 'text' },
    ],
    Dify: [
        { name: 'dify_apikey', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'dify_url', label: 'serviceFields.url', type: 'text' },
    ],
    Grok: [
        { name: 'grok_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'grok_model', label: 'serviceFields.model', type: 'text', placeholder: 'grok-2-1212' },
    ],
    Groq: [
        { name: 'groq_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'groq_model', label: 'serviceFields.model', type: 'text', placeholder: 'llama-3-3-70b-versatile' },
    ],
    QwenMt: [
        { name: 'qwenmt_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'qwenmt_model', label: 'serviceFields.model', type: 'text', placeholder: 'qwen-mt-plus' },
        { name: 'qwenmt_base_url', label: 'serviceFields.baseUrl', type: 'text', placeholder: 'https://dashscope.aliyuncs.com/compatible-mode/v1' },
    ],
    OpenAICompatible: [
        { name: 'openai_compatible_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'openai_compatible_base_url', label: 'serviceFields.baseUrl', type: 'text', placeholder: 'https://api.openai.com/v1' },
        { name: 'openai_compatible_model', label: 'serviceFields.model', type: 'text', placeholder: 'gpt-4o-mini' },
    ],
    AliyunDashScope: [
        { name: 'aliyun_dashscope_api_key', label: 'serviceFields.apiKey', type: 'password' },
        { name: 'aliyun_dashscope_model', label: 'serviceFields.model', type: 'text', placeholder: 'qwen-plus-latest' },
        { name: 'aliyun_dashscope_base_url', label: 'serviceFields.baseUrl', type: 'text', placeholder: 'https://dashscope.aliyuncs.com/compatible-mode/v1' },
    ],
    DeepL: [
        { name: 'deepl_auth_key', label: 'serviceFields.authKey', type: 'password' },
    ],
    ClaudeCode: [
        { name: 'claude_code_path', label: 'serviceFields.cliPath', type: 'text', placeholder: 'claude' },
        { name: 'claude_code_model', label: 'serviceFields.model', type: 'text', placeholder: 'sonnet' },
    ],
}

// Maps frontend service keys to backend translator `name` values.
// Backend names come from each translator class's `name` attribute in pdf2zh/translator.py.
export const serviceToBackendName = {
    Google: 'google',
    Bing: 'bing',
    DeepL: 'deepl',
    DeepLX: 'deeplx',
    Ollama: 'ollama',
    Xinference: 'xinference',
    OpenAI: 'openai',
    AzureOpenAI: 'azure-openai',
    ModelScope: 'modelscope',
    Zhipu: 'zhipu',
    SiliconFlow: 'silicon',
    TencentMechineTranslation: 'tencent',
    Gemini: 'gemini',
    Azure: 'azure',
    AnythingLLM: 'anythingllm',
    Dify: 'dify',
    Grok: 'grok',
    Groq: 'groq',
    DeepSeek: 'deepseek',
    QwenMt: 'qwen-mt',
    OpenAICompatible: 'openailiked',
    AliyunDashScope: 'openailiked',
    ClaudeCode: 'openailiked',
    MiniMax: 'minimax',
    '302.AI': '302ai',
    'Argos Translate': 'argos',
}

// Services from v2 that should be migrated to Google (unsupported in stable/fast mode)
export const unsupportedServices = ['SiliconFlowFree', 'SiliconFlow', 'Bing']
