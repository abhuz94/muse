import imageURLBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

const { error } = console;

class SanityClient {
  #sanityClient = null;

  #imageURLBuilder = null;

  #isReady = false;

  constructor() {
    this.init();
  }

  fetch(q, options = {}) {
    return this.#sanityClient.fetch(q, options);
  }

  create(doc) {
    return this.#sanityClient.create(doc);
  }

  upload(buffer, type = 'file', options = {}) {
    return this.#sanityClient
      .assets
      .upload(type, buffer, options);
  }

  urlFor(source) {
    return this.#imageURLBuilder.image(source);
  }

  init() {
    if (this.#isReady) { return; }

    try {
      this.#sanityClient = sanityClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        token: process.env.SANITY_TOKEN,
        useCdn: true,
      });
      this.#imageURLBuilder = imageURLBuilder(this.#sanityClient);
      this.#isReady = true;
    } catch (e) {
      error(`sanity client initialization failed, reason: ${e.message}`);
    }
  }
}

export default new SanityClient();
