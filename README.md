# GITHUB ACTIONS 

# CI/CD

## CI (Continuous Integration)

Checks code quality against the rest of the application. It is triggered automatically on every code push to certain git branches (e.g. main)

## CD Continuous Delivery/Deployment

Checks if the code is deployable. It does by testing code deployment to environments that are close to production.

# YAML/YML Basics

YAML is a superset of JSON. That means any valid JSON file is also valid YAML (but not the other way around).<br>

## Key Rule:

In YAML, indentation defines nesting (parent-child relationships).

Indentation is done using spaces only (not tabs).

Child elements are indented more than their parents.

```yaml
person:
  name: Alice
  age: 30
  address:
    street: 123 Main St
    city: Springfield
```
## Explanation:

* Person is the top level key.

* name, age, and address are the children of the person.

* Inside address, street, and city are children of the address.

---

## Scalar datatypes in yaml (Boolean, float, int, string, date)

```yaml
age: 30                        # Integer
salary: 35584.56              # Float
user_name: KARAKOZA           # String (unquoted is fine here)
is_active: true               # Boolean
employment_date: 2025-02-01T14:30:00Z  # ISO 8601 Date-Time (interpreted as string or datetime depending on parser)
serial_number: "005000"       # Quoted to preserve leading zeros (string)
regex: '' # Must be added in single quotes for special characters
multi_line_string: |
  Hello
  This
  is
  KARAKOZA

# THE OUTPUT WILL BE AS WRITTEN WITH NEW LINES 

folded_message: >
  This is a folded
  multi-line string
  that becomes a single

  line when parsed.

# THE OUTPUT WILL BE JOINED IN A SINGLE LINE but if there is a blank line it will be treated as a new line
```

## Double Quotes vs Single Quotes in YAML

| Feature                     | **Double Quotes (`" "`)**                                                                                  | **Single Quotes (`' '`)**                                                       |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Escape Sequences**        |  Interprets escapes like `\n`, `\t`, `\"`<br>**Example:**<br>`"Line 1\nLine 2"` →<br>`Line 1`<br>`Line 2` |  Treated literally<br>**Example:**<br>`'Line 1\nLine 2'` →<br>`Line 1\nLine 2` |
| **Include Quotes**          |  Can contain `'` without escaping<br>**Example:**<br>`"It's OK"`                                          |  Can contain `"` without escaping<br>**Example:**<br>`'She said "hi"'`         |
| **Escape Same Quote Type**  | Use `\` to escape<br>**Example:**<br>`"He said \"hello\""` → `He said "hello"`                             | Use `''` to escape<br>**Example:**<br>`'It''s fine'` → `It's fine`              |
| **Backslashes**             |  Interpreted<br>**Example:**<br>`"C:\\Users\\Admin"` → `C:\Users\Admin`                                   |  Treated literally<br>**Example:**<br>`'C:\Users\Admin'` → `C:\Users\Admin`    |
| **Multiline Strings**       |  Use `\n` to break lines<br>**Example:**<br>`"Hello\nWorld"` → two lines                                  |  `\n` stays literal<br>**Example:**<br>`'Hello\nWorld'` → `Hello\nWorld`       |
| **Interpolation/Variables** |  YAML does not support variable interpolation                                                             |  Same                                                                          |
| **Use Cases**               | When you need to escape characters or handle special symbols                                               | When you want the string interpreted *exactly as written*                       |

## Collections

### Map

```yaml

employee:
  name: mo
  age: 35
  contact:
    email: apsmda@gmail.com

```

### List

Here is a list of maps 

```yaml
employees:
  - name: mo
    age: 35
    contact:
      email: apsmda@gmail.com
  - name: asm
    age: 23
    contact:
      email: aknsd@hotmail.com
```

## Webhook Triggers

continue @1:12
