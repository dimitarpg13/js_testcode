# Reserved words

Reserved words can't be variable names, but they can be property names.

All JavaScript _keywords_ are reserved words:

    await break case catch class const continue debugger default
    delete do else export extends finally for function if import in
    instanceof let new return static super switch this throw try
    typeof var void while with yield

The following tokens are also keywords, but currently not used in the language:

    enum implements package protected interface private public

The following literals are reserved words:
  
    true false null

Technically, these words are not reserved, but you should avoid them too because
effectively they act as keywords:

    Infinity NaN undefined async

You shouldn't use the names of global variables (`String`, `Math`, etc.) for your own
variables and parameters.
