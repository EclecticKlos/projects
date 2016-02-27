**Databases**
- Most frameworks support MVC, which is a best practice
  - To separate in separate files, check out "Databases--interacting with DBs"
  - Enables unit testing
  - http://phpbridge.org/intro-to-php/creating_a_data_class
- Abstraction layers make it possible for your code to interface with multiple databases (ie, wraps db queries in php methods, giving db abstraction instead of just connection abstraction from PDO)

**Templating**
- Oft "views", make up *part* of the V in MVC
- Display formatted content (do not lookup, persist, etc)
- "Template code" means you can combine code with other code (PHP = template code, as can be combined with HTML, JS etc)
- Compiled templates: auto escaping, inheritance etc make code easier to write, read and safer to use.
- Extensive resources provided

**Errors and Exceptions**
- Different types of errors; warnings and notices do not halt execution
- Reporting behavior (displayed vs hidden/logged) can be modified
- PHP is "exception light", compared to other languages
  - Whereas Ruby informs dev of every single exception, PHP not so much
  - Possible to make PHP "exception heavy" through frameworks and/or ErrorException class
- Can also use catch methods to define action for specific errors
- Should look into SPL for more specific exceptions

**Security**
- A must-read for security: https://www.owasp.org/index.php/Guide_Table_of_Contents
- Bcrypt used for password hashing
- ALWAYS filter foreign input before using in code. filter_var() and filter_input() can do this
  - This includes $_GET and $_POST form input data
  - Uploaded and downloaded files, session values, cookie data, and data from third-party web services are foreign input, too.
- Cross-site-scripting (XSS)
- Sanitization removes unsafe/illegal chars from foreign input
- Follow best practices for config files
- Do not show errors in production -- error reporting in dev and production should be different

**Testing**
- Dependency injection combined with use of "mock" classes make for better test coverage
- When class/function created, unit test for each behavior it should have
- Should error for bad arguments and work for correct args
- Integration testing = various modules combined and tested as a group
- PHPSpec is inspired by RSpec, tests specifications against how the code should behave

**Servers and Deployment**
- Several ways to deploy/run on production web servers:
  - Platform as a Service (PaaS)
    - Most popular
  - Virtual/dedicated servers (heavier on sys admin stuff)
  - Shared Servers
- Build automation *significantly* reduces deployment errors.
- Build tools can be described as a collection of scripts that handle common tasks of software deployment. The build tool is not a part of your software, it acts on your software from ‘outside’.
  - Dependency management
  - Compilation, minification of assets
  - Run tests
  - Creation of docs
  - Packaging
  - Deployment

**Virtualization**
- Vagrant used for virtualization to keep environments (dev and production) in line
  - Further reading provided

**Caching**
- Opcode prevent redundant compiliatin by storing opcodes in memory and reusing on successive calls.
- No reason not to use--very small implementation and significant boost in performance
