import imageURLBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

import clientFetch from './clientFetch';

const { error } = console;
const API_BASE_URL = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api`;

class SanityClient {
  #sanityClient = null;

  #imageURLBuilder = null;

  #isReady = false;

  constructor() {
    this.init();
  }

  urlFor(source) {
    if (!source) return '';

    return this.#imageURLBuilder
      .image(source)
      .width(2560)
      .fit('min')
      .url();
  }

  init() {
    if (this.#isReady) { return; }

    try {
      this.#sanityClient = sanityClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        useCdn: true,
      });
      this.#imageURLBuilder = imageURLBuilder(this.#sanityClient);
      this.#isReady = true;
    } catch (e) {
      error(`sanity client initialization failed, reason: ${e.message}`);
    }
  }

  static fetch(q, options = {}) {
    return clientFetch(`${API_BASE_URL}/query?q=${encodeURIComponent(q)}`, options);
  }
}

export default new SanityClient();
export { SanityClient };
