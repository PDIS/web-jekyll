import * as v2 from './v2';
import * as v3 from './v3';
import * as v3beta1 from './v3beta1';
declare const TranslationServiceClient: typeof v3.TranslationServiceClient;
type TranslationServiceClient = v3.TranslationServiceClient;
export { v2, v3, v3beta1, TranslationServiceClient };
declare const _default: {
    v2: typeof v2;
    v3: typeof v3;
    v3beta1: typeof v3beta1;
    TranslationServiceClient: typeof v3.TranslationServiceClient;
};
export default _default;
import * as protos from '../protos/protos';
export { protos };
