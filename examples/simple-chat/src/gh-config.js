export default {
	"model_list": [
		// Llama-2
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f32_1-MLC/resolve/main/",
			"local_id": "Llama-2-7b-chat-hf-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f32_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 9109.03,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
			"local_id": "Llama-2-7b-chat-hf-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6749.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
			"local_id": "Llama-2-7b-chat-hf-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 4618.52,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-13b-chat-hf-q4f16_1-MLC/resolve/main/",
			"local_id": "Llama-2-13b-chat-hf-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-13b-chat-hf/Llama-2-13b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 11814.09,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Llama-2-70b-chat-hf-q4f16_1-MLC/resolve/main/",
			"local_id": "Llama-2-70b-chat-hf-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-70b-chat-hf/Llama-2-70b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
			"vram_required_MB": 43729.05,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		// RedPajama
		{
			"model_url": "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
			"local_id": "RedPajama-INCITE-Chat-3B-v1-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx2k-webgpu.wasm",
			"vram_required_MB": 2972.09,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
			"local_id": "RedPajama-INCITE-Chat-3B-v1-q4f32_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx2k-webgpu.wasm",
			"vram_required_MB": 3928.09,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
			"local_id": "RedPajama-INCITE-Chat-3B-v1-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 2041.09,
			"low_resource_required": true,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
			"local_id": "RedPajama-INCITE-Chat-3B-v1-q4f32_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 2558.09,
			"low_resource_required": true,
		},
		// Mistral variants
		{
			"model_url": "https://huggingface.co/mlc-ai/WizardMath-7B-V1.1-q4f16_1-MLC/resolve/main/",
			"local_id": "WizardMath-7B-V1.1-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.2-q4f16_1-MLC/resolve/main/",
			"local_id": "Mistral-7B-Instruct-v0.2-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/OpenHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
			"local_id": "OpenHermes-2.5-Mistral-7B-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
			"local_id": "NeuralHermes-2.5-Mistral-7B-q4f16_1",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
			"vram_required_MB": 6079.02,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		// TinyLlama
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f16-MLC/resolve/main/",
			"local_id": "TinyLlama-1.1B-Chat-v0.4-q0f16",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f16-ctx2k-webgpu.wasm",
			"vram_required_MB": 5063.52,
			"low_resource_required": false,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f32-MLC/resolve/main/",
			"local_id": "TinyLlama-1.1B-Chat-v0.4-q0f32",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f32-ctx2k-webgpu.wasm",
			"vram_required_MB": 5394.53,
			"low_resource_required": false,
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC/resolve/main/",
			"local_id": "TinyLlama-1.1B-Chat-v0.4-q4f16_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f16_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 899.11,
			"low_resource_required": true,
			"required_features": ["shader-f16"],
		},
		{
			"model_url": "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC/resolve/main/",
			"local_id": "TinyLlama-1.1B-Chat-v0.4-q4f32_1-1k",
			"model_lib_url": "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f32_1-ctx1k-webgpu.wasm",
			"vram_required_MB": 992.11,
			"low_resource_required": true,
		},
	],
	"use_web_worker": true
}
