const { TestScheduler } = require('rxjs/testing');

// Minimal MovieService replica to test searchMovies behavior with mocked HttpClient
class MovieService {
  constructor(http) {
    this.http = http;
  }

  searchMovies(query) {
    const url = `https://api.example.com/search/movie?query=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }
}

function run() {
  const testScheduler = new TestScheduler((actual, expected) => {
    const assert = require('assert');
    try {
      assert.deepStrictEqual(actual, expected);
    } catch (err) {
      console.error('Assertion failed:', err.message);
      process.exit(2);
    }
  });

  testScheduler.run(({ cold, expectObservable }) => {
    const mockResult = { results: [{ id: 1, original_title: 'Mock' }] };

    const httpClientSpy = {
      get: (url) => cold('--a|', { a: mockResult })
    };

    const service = new MovieService(httpClientSpy);
    const obs$ = service.searchMovies('query');

    expectObservable(obs$).toBe('--a|', { a: mockResult });
  });

  console.log('TestScheduler run completed — all assertions passed.');
}

run();
