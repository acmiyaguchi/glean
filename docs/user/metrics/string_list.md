# String List

Strings lists are used for recording a list of Unicode string values, such as the names of the enabled search engines.

---

_Note:_ Be careful using arbitrary strings and make sure they can't accidentally contain identifying data (like directory paths or user input).

---

## Configuration

First you need to add an entry for the counter to the `metrics.yaml` file:

```YAML
search:
  engines:
    type: string_list
    description: >
      Records the name of the enabled search engines.
    lifetime: application
    ...
```

## API

{{#include ../../tab_header.md}}

<div data-lang="Kotlin" class="tab">

```Kotlin
import org.mozilla.yourApplication.GleanMetrics.Search

// Add them one at a time
engines.forEach {
  Search.engines.add(it)
}

// Set them in one go
Search.engines.set(engines)
```

There are test APIs available too:

```Kotlin
import org.mozilla.yourApplication.GleanMetrics.Search

// Was anything recorded?
assertTrue(Search.engines.testHasValue())
// Does it have the expected value?
// IMPORTANT: It may have been truncated -- see "Limits" below
assertEquals(listOf("Google", "DuckDuckGo"), Search.engines.testGetValue())
// Were any of the values too long, and thus an error was recorded?
assertEquals(1, Search.engines.testGetNumRecordedErrors(ErrorType.InvalidValue))
```

</div>

<div data-lang="Swift" class="tab">

```Swift
// Add them one at a time
for engine in engines {
    Search.engines.add(engine)
}

// Set them in one go
Search.engines.set(engines)
```

There are test APIs available too:

```Swift
@testable import Glean

// Was anything recorded?
XCTAssert(Search.engines.testHasValue())
// Does it have the expected value?
// IMPORTANT: It may have been truncated -- see "Limits" below
XCTAssertEqual(["Google", "DuckDuckGo"], try Search.engines.testGetValue())
// Were any of the values too long, and thus an error was recorded?
XCTAssertEqual(1, Search.engines.testGetNumRecordedErrors(.invalidValue))
```

</div>

{{#include ../../tab_footer.md}}

## Limits

* Fixed maximum string length: 50. Longer strings are truncated. This is measured in the number of bytes when the string is encoded in UTF-8.

* Fixed maximum list length: 20 items. Additional strings are dropped.

## Examples

* The names of the enabled search engines.

## Recorded errors

* `invalid_value`: if the string is too long

* `invalid_value`: if the list is too long

## Reference

* [Kotlin API docs](../../../javadoc/glean/mozilla.telemetry.glean.private/-string-list-metric-type/index.html)

