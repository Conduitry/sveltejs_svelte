import { isIdentifierStart, isIdentifierChar } from 'acorn';
import full_char_code_at from './full_char_code_at';
/** source : rollup */
export const globals = new Set([
	'global',
	'__proto__',
	'AbortController',
	'AbortSignal',
	'addEventListener',
	'alert',
	'AnalyserNode',
	'Animation',
	'AnimationEvent',
	'applicationCache',
	'ApplicationCache',
	'ApplicationCacheErrorEvent',
	'Array',
	'ArrayBuffer',
	'atob',
	'Atomics',
	'Attr',
	'Audio',
	'AudioBuffer',
	'AudioBufferSourceNode',
	'AudioContext',
	'AudioDestinationNode',
	'AudioListener',
	'AudioNode',
	'AudioParam',
	'AudioProcessingEvent',
	'AudioScheduledSourceNode',
	'AudioWorkletNode',
	'BarProp',
	'BaseAudioContext',
	'BatteryManager',
	'BeforeUnloadEvent',
	'BigInt',
	'BigInt64Array',
	'BigUint64Array',
	'BiquadFilterNode',
	'Blob',
	'BlobEvent',
	'blur',
	'Boolean',
	'BroadcastChannel',
	'btoa',
	'ByteLengthQueuingStrategy',
	'Cache',
	'caches',
	'CacheStorage',
	'cancelAnimationFrame',
	'cancelIdleCallback',
	'CanvasCaptureMediaStreamTrack',
	'CanvasGradient',
	'CanvasPattern',
	'CanvasRenderingContext2D',
	'ChannelMergerNode',
	'ChannelSplitterNode',
	'CharacterData',
	'clearInterval',
	'clearTimeout',
	'clientInformation',
	'ClipboardEvent',
	'close',
	'closed',
	'CloseEvent',
	'Comment',
	'CompositionEvent',
	'confirm',
	'console',
	'ConstantSourceNode',
	'ConvolverNode',
	'CountQueuingStrategy',
	'createImageBitmap',
	'Credential',
	'CredentialsContainer',
	'crypto',
	'Crypto',
	'CryptoKey',
	'CSS',
	'CSSConditionRule',
	'CSSFontFaceRule',
	'CSSGroupingRule',
	'CSSImportRule',
	'CSSKeyframeRule',
	'CSSKeyframesRule',
	'CSSMediaRule',
	'CSSNamespaceRule',
	'CSSPageRule',
	'CSSRule',
	'CSSRuleList',
	'CSSStyleDeclaration',
	'CSSStyleRule',
	'CSSStyleSheet',
	'CSSSupportsRule',
	'CustomElementRegistry',
	'customElements',
	'CustomEvent',
	'DataTransfer',
	'DataTransferItem',
	'DataTransferItemList',
	'DataView',
	'Date',
	'decodeURI',
	'decodeURIComponent',
	'defaultstatus',
	'defaultStatus',
	'DelayNode',
	'DeviceMotionEvent',
	'DeviceOrientationEvent',
	'devicePixelRatio',
	'dispatchEvent',
	'document',
	'Document',
	'DocumentFragment',
	'DocumentType',
	'DOMError',
	'DOMException',
	'DOMImplementation',
	'DOMMatrix',
	'DOMMatrixReadOnly',
	'DOMParser',
	'DOMPoint',
	'DOMPointReadOnly',
	'DOMQuad',
	'DOMRect',
	'DOMRectReadOnly',
	'DOMStringList',
	'DOMStringMap',
	'DOMTokenList',
	'DragEvent',
	'DynamicsCompressorNode',
	'Element',
	'encodeURI',
	'encodeURIComponent',
	'Error',
	'ErrorEvent',
	'escape',
	'eval',
	'EvalError',
	'Event',
	'EventSource',
	'EventTarget',
	'external',
	'fetch',
	'File',
	'FileList',
	'FileReader',
	'find',
	'Float32Array',
	'Float64Array',
	'focus',
	'FocusEvent',
	'FontFace',
	'FontFaceSetLoadEvent',
	'FormData',
	'frames',
	'Function',
	'GainNode',
	'Gamepad',
	'GamepadButton',
	'GamepadEvent',
	'getComputedStyle',
	'getSelection',
	'globalThis',
	'HashChangeEvent',
	'hasOwnProperty',
	'Headers',
	'history',
	'History',
	'HTMLAllCollection',
	'HTMLAnchorElement',
	'HTMLAreaElement',
	'HTMLAudioElement',
	'HTMLBaseElement',
	'HTMLBodyElement',
	'HTMLBRElement',
	'HTMLButtonElement',
	'HTMLCanvasElement',
	'HTMLCollection',
	'HTMLContentElement',
	'HTMLDataElement',
	'HTMLDataListElement',
	'HTMLDetailsElement',
	'HTMLDialogElement',
	'HTMLDirectoryElement',
	'HTMLDivElement',
	'HTMLDListElement',
	'HTMLDocument',
	'HTMLElement',
	'HTMLEmbedElement',
	'HTMLFieldSetElement',
	'HTMLFontElement',
	'HTMLFormControlsCollection',
	'HTMLFormElement',
	'HTMLFrameElement',
	'HTMLFrameSetElement',
	'HTMLHeadElement',
	'HTMLHeadingElement',
	'HTMLHRElement',
	'HTMLHtmlElement',
	'HTMLIFrameElement',
	'HTMLImageElement',
	'HTMLInputElement',
	'HTMLLabelElement',
	'HTMLLegendElement',
	'HTMLLIElement',
	'HTMLLinkElement',
	'HTMLMapElement',
	'HTMLMarqueeElement',
	'HTMLMediaElement',
	'HTMLMenuElement',
	'HTMLMetaElement',
	'HTMLMeterElement',
	'HTMLModElement',
	'HTMLObjectElement',
	'HTMLOListElement',
	'HTMLOptGroupElement',
	'HTMLOptionElement',
	'HTMLOptionsCollection',
	'HTMLOutputElement',
	'HTMLParagraphElement',
	'HTMLParamElement',
	'HTMLPictureElement',
	'HTMLPreElement',
	'HTMLProgressElement',
	'HTMLQuoteElement',
	'HTMLScriptElement',
	'HTMLSelectElement',
	'HTMLShadowElement',
	'HTMLSlotElement',
	'HTMLSourceElement',
	'HTMLSpanElement',
	'HTMLStyleElement',
	'HTMLTableCaptionElement',
	'HTMLTableCellElement',
	'HTMLTableColElement',
	'HTMLTableElement',
	'HTMLTableRowElement',
	'HTMLTableSectionElement',
	'HTMLTemplateElement',
	'HTMLTextAreaElement',
	'HTMLTimeElement',
	'HTMLTitleElement',
	'HTMLTrackElement',
	'HTMLUListElement',
	'HTMLUnknownElement',
	'HTMLVideoElement',
	'IDBCursor',
	'IDBCursorWithValue',
	'IDBDatabase',
	'IDBFactory',
	'IDBIndex',
	'IDBKeyRange',
	'IDBObjectStore',
	'IDBOpenDBRequest',
	'IDBRequest',
	'IDBTransaction',
	'IDBVersionChangeEvent',
	'IdleDeadline',
	'IIRFilterNode',
	'Image',
	'ImageBitmap',
	'ImageBitmapRenderingContext',
	'ImageCapture',
	'ImageData',
	'indexedDB',
	'Infinity',
	'innerHeight',
	'innerWidth',
	'InputEvent',
	'Int16Array',
	'Int32Array',
	'Int8Array',
	'IntersectionObserver',
	'IntersectionObserverEntry',
	'Intl',
	'isFinite',
	'isNaN',
	'isPrototypeOf',
	'isSecureContext',
	'JSON',
	'KeyboardEvent',
	'KeyframeEffect',
	'length',
	'localStorage',
	'location',
	'Location',
	'locationbar',
	'Map',
	'matchMedia',
	'Math',
	'MediaDeviceInfo',
	'MediaDevices',
	'MediaElementAudioSourceNode',
	'MediaEncryptedEvent',
	'MediaError',
	'MediaKeyMessageEvent',
	'MediaKeySession',
	'MediaKeyStatusMap',
	'MediaKeySystemAccess',
	'MediaList',
	'MediaQueryList',
	'MediaQueryListEvent',
	'MediaRecorder',
	'MediaSettingsRange',
	'MediaSource',
	'MediaStream',
	'MediaStreamAudioDestinationNode',
	'MediaStreamAudioSourceNode',
	'MediaStreamEvent',
	'MediaStreamTrack',
	'MediaStreamTrackEvent',
	'menubar',
	'MessageChannel',
	'MessageEvent',
	'MessagePort',
	'MIDIAccess',
	'MIDIConnectionEvent',
	'MIDIInput',
	'MIDIInputMap',
	'MIDIMessageEvent',
	'MIDIOutput',
	'MIDIOutputMap',
	'MIDIPort',
	'MimeType',
	'MimeTypeArray',
	'MouseEvent',
	'moveBy',
	'moveTo',
	'MutationEvent',
	'MutationObserver',
	'MutationRecord',
	'name',
	'NamedNodeMap',
	'NaN',
	'NavigationPreloadManager',
	'navigator',
	'Navigator',
	'NetworkInformation',
	'Node',
	'NodeFilter',
	'NodeIterator',
	'NodeList',
	'Notification',
	'Number',
	'Object',
	'OfflineAudioCompletionEvent',
	'OfflineAudioContext',
	'offscreenBuffering',
	'OffscreenCanvas',
	'open',
	'openDatabase',
	'Option',
	'origin',
	'OscillatorNode',
	'outerHeight',
	'outerWidth',
	'PageTransitionEvent',
	'pageXOffset',
	'pageYOffset',
	'PannerNode',
	'parent',
	'parseFloat',
	'parseInt',
	'Path2D',
	'PaymentAddress',
	'PaymentRequest',
	'PaymentRequestUpdateEvent',
	'PaymentResponse',
	'performance',
	'Performance',
	'PerformanceEntry',
	'PerformanceLongTaskTiming',
	'PerformanceMark',
	'PerformanceMeasure',
	'PerformanceNavigation',
	'PerformanceNavigationTiming',
	'PerformanceObserver',
	'PerformanceObserverEntryList',
	'PerformancePaintTiming',
	'PerformanceResourceTiming',
	'PerformanceTiming',
	'PeriodicWave',
	'Permissions',
	'PermissionStatus',
	'personalbar',
	'PhotoCapabilities',
	'Plugin',
	'PluginArray',
	'PointerEvent',
	'PopStateEvent',
	'postMessage',
	'Presentation',
	'PresentationAvailability',
	'PresentationConnection',
	'PresentationConnectionAvailableEvent',
	'PresentationConnectionCloseEvent',
	'PresentationConnectionList',
	'PresentationReceiver',
	'PresentationRequest',
	'print',
	'ProcessingInstruction',
	'ProgressEvent',
	'Promise',
	'PromiseRejectionEvent',
	'prompt',
	'propertyIsEnumerable',
	'Proxy',
	'PushManager',
	'PushSubscription',
	'PushSubscriptionOptions',
	'queueMicrotask',
	'RadioNodeList',
	'Range',
	'RangeError',
	'ReadableStream',
	'ReferenceError',
	'Reflect',
	'RegExp',
	'RemotePlayback',
	'removeEventListener',
	'Request',
	'requestAnimationFrame',
	'requestIdleCallback',
	'resizeBy',
	'ResizeObserver',
	'ResizeObserverEntry',
	'resizeTo',
	'Response',
	'RTCCertificate',
	'RTCDataChannel',
	'RTCDataChannelEvent',
	'RTCDtlsTransport',
	'RTCIceCandidate',
	'RTCIceTransport',
	'RTCPeerConnection',
	'RTCPeerConnectionIceEvent',
	'RTCRtpReceiver',
	'RTCRtpSender',
	'RTCSctpTransport',
	'RTCSessionDescription',
	'RTCStatsReport',
	'RTCTrackEvent',
	'screen',
	'Screen',
	'screenLeft',
	'ScreenOrientation',
	'screenTop',
	'screenX',
	'screenY',
	'ScriptProcessorNode',
	'scroll',
	'scrollbars',
	'scrollBy',
	'scrollTo',
	'scrollX',
	'scrollY',
	'SecurityPolicyViolationEvent',
	'Selection',
	'self',
	'ServiceWorker',
	'ServiceWorkerContainer',
	'ServiceWorkerRegistration',
	'sessionStorage',
	'Set',
	'setInterval',
	'setTimeout',
	'ShadowRoot',
	'SharedArrayBuffer',
	'SharedWorker',
	'SourceBuffer',
	'SourceBufferList',
	'speechSynthesis',
	'SpeechSynthesisEvent',
	'SpeechSynthesisUtterance',
	'StaticRange',
	'status',
	'statusbar',
	'StereoPannerNode',
	'stop',
	'Storage',
	'StorageEvent',
	'StorageManager',
	'String',
	'styleMedia',
	'StyleSheet',
	'StyleSheetList',
	'SubtleCrypto',
	'SVGAElement',
	'SVGAngle',
	'SVGAnimatedAngle',
	'SVGAnimatedBoolean',
	'SVGAnimatedEnumeration',
	'SVGAnimatedInteger',
	'SVGAnimatedLength',
	'SVGAnimatedLengthList',
	'SVGAnimatedNumber',
	'SVGAnimatedNumberList',
	'SVGAnimatedPreserveAspectRatio',
	'SVGAnimatedRect',
	'SVGAnimatedString',
	'SVGAnimatedTransformList',
	'SVGAnimateElement',
	'SVGAnimateMotionElement',
	'SVGAnimateTransformElement',
	'SVGAnimationElement',
	'SVGCircleElement',
	'SVGClipPathElement',
	'SVGComponentTransferFunctionElement',
	'SVGDefsElement',
	'SVGDescElement',
	'SVGDiscardElement',
	'SVGElement',
	'SVGEllipseElement',
	'SVGFEBlendElement',
	'SVGFEColorMatrixElement',
	'SVGFEComponentTransferElement',
	'SVGFECompositeElement',
	'SVGFEConvolveMatrixElement',
	'SVGFEDiffuseLightingElement',
	'SVGFEDisplacementMapElement',
	'SVGFEDistantLightElement',
	'SVGFEDropShadowElement',
	'SVGFEFloodElement',
	'SVGFEFuncAElement',
	'SVGFEFuncBElement',
	'SVGFEFuncGElement',
	'SVGFEFuncRElement',
	'SVGFEGaussianBlurElement',
	'SVGFEImageElement',
	'SVGFEMergeElement',
	'SVGFEMergeNodeElement',
	'SVGFEMorphologyElement',
	'SVGFEOffsetElement',
	'SVGFEPointLightElement',
	'SVGFESpecularLightingElement',
	'SVGFESpotLightElement',
	'SVGFETileElement',
	'SVGFETurbulenceElement',
	'SVGFilterElement',
	'SVGForeignObjectElement',
	'SVGGElement',
	'SVGGeometryElement',
	'SVGGradientElement',
	'SVGGraphicsElement',
	'SVGImageElement',
	'SVGLength',
	'SVGLengthList',
	'SVGLinearGradientElement',
	'SVGLineElement',
	'SVGMarkerElement',
	'SVGMaskElement',
	'SVGMatrix',
	'SVGMetadataElement',
	'SVGMPathElement',
	'SVGNumber',
	'SVGNumberList',
	'SVGPathElement',
	'SVGPatternElement',
	'SVGPoint',
	'SVGPointList',
	'SVGPolygonElement',
	'SVGPolylineElement',
	'SVGPreserveAspectRatio',
	'SVGRadialGradientElement',
	'SVGRect',
	'SVGRectElement',
	'SVGScriptElement',
	'SVGSetElement',
	'SVGStopElement',
	'SVGStringList',
	'SVGStyleElement',
	'SVGSVGElement',
	'SVGSwitchElement',
	'SVGSymbolElement',
	'SVGTextContentElement',
	'SVGTextElement',
	'SVGTextPathElement',
	'SVGTextPositioningElement',
	'SVGTitleElement',
	'SVGTransform',
	'SVGTransformList',
	'SVGTSpanElement',
	'SVGUnitTypes',
	'SVGUseElement',
	'SVGViewElement',
	'Symbol',
	'SyntaxError',
	'TaskAttributionTiming',
	'Text',
	'TextDecoder',
	'TextEncoder',
	'TextEvent',
	'TextMetrics',
	'TextTrack',
	'TextTrackCue',
	'TextTrackCueList',
	'TextTrackList',
	'TimeRanges',
	'toLocaleString',
	'toolbar',
	'top',
	'toString',
	'Touch',
	'TouchEvent',
	'TouchList',
	'TrackEvent',
	'TransitionEvent',
	'TreeWalker',
	'TypeError',
	'UIEvent',
	'Uint16Array',
	'Uint32Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'unescape',
	'URIError',
	'URL',
	'URLSearchParams',
	'ValidityState',
	'valueOf',
	'visualViewport',
	'VisualViewport',
	'VTTCue',
	'WaveShaperNode',
	'WeakMap',
	'WeakSet',
	'WebAssembly',
	'WebGL2RenderingContext',
	'WebGLActiveInfo',
	'WebGLBuffer',
	'WebGLContextEvent',
	'WebGLFramebuffer',
	'WebGLProgram',
	'WebGLQuery',
	'WebGLRenderbuffer',
	'WebGLRenderingContext',
	'WebGLSampler',
	'WebGLShader',
	'WebGLShaderPrecisionFormat',
	'WebGLSync',
	'WebGLTexture',
	'WebGLTransformFeedback',
	'WebGLUniformLocation',
	'WebGLVertexArrayObject',
	'WebSocket',
	'WheelEvent',
	'window',
	'Window',
	'Worker',
	'WritableStream',
	'XMLDocument',
	'XMLHttpRequest',
	'XMLHttpRequestEventTarget',
	'XMLHttpRequestUpload',
	'XMLSerializer',
	'XPathEvaluator',
	'XPathExpression',
	'XPathResult',
	'XSLTProcessor',
]);

export const reserved = new Set([
	'await',
	'break',
	'case',
	'catch',
	'class',
	'const',
	'continue',
	'debugger',
	'default',
	'delete',
	'do',
	'else',
	'enum',
	'export',
	'extends',
	'finally',
	'for',
	'function',
	'if',
	'implements',
	'import',
	'in',
	'instanceof',
	'interface',
	'let',
	'new',
	'package',
	'private',
	'protected',
	'public',
	'return',
	'static',
	'super',
	'switch',
	'this',
	'throw',
	'try',
	'typeof',
	'var',
	'void',
	'while',
	'with',
	'yield',
]);

const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

export function is_void(name: string) {
	return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

export function is_valid(str: string): boolean {
	let i = 0;

	while (i < str.length) {
		const code = full_char_code_at(str, i);
		if (!(i === 0 ? isIdentifierStart : isIdentifierChar)(code, true)) return false;

		i += code <= 0xffff ? 1 : 2;
	}

	return true;
}

export function sanitize(name: string) {
	return name
		.replace(/[^a-zA-Z0-9_]+/g, '_')
		.replace(/^_/, '')
		.replace(/_$/, '')
		.replace(/^[0-9]/, '_$&');
}
