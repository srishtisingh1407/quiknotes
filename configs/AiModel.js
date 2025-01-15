const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a comprehensive study material for Python for exam and the level of difficulty will be moderate with a summary of the course, a list of chapters along with summaries for each chapter, and a topic list in each chapter in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "courseTitle": "Python Programming Fundamentals",\n  "difficulty": "Moderate",\n  "courseSummary": "This course provides a comprehensive introduction to Python programming, suitable for students with little to no prior programming experience but aiming for a solid understanding of core concepts.  The curriculum covers fundamental data types, control structures, data structures (lists, dictionaries, sets, tuples), functions, object-oriented programming principles, file handling, exception handling, and an introduction to essential libraries like NumPy and Pandas. The course emphasizes practical application through hands-on exercises and examples, preparing students for more advanced Python programming and related fields.  The moderate difficulty level ensures a balanced approach, providing sufficient depth without overwhelming beginners.",\n  "chapters": [\n    {\n      "chapterTitle": "Introduction to Python",\n      "chapterSummary": "This chapter introduces the basics of Python, including installation, setting up the environment, data types, operators, and control flow. It lays the groundwork for all subsequent chapters.",\n      "topics": [\n        "Installing Python and setting up your environment (IDE, text editor)",\n        "Basic Syntax and Program Structure",\n        "Data Types: Integers, Floats, Strings, Booleans",\n        "Operators: Arithmetic, Comparison, Logical, Bitwise",\n        "Input and Output Operations",\n        "Control Flow: Conditional Statements (if, elif, else), Loops (for, while)",\n        "Working with comments"\n      ]\n    },\n    {\n      "chapterTitle": "Data Structures",\n      "chapterSummary": "This chapter explores fundamental Python data structures, focusing on their properties, usage, and manipulation.  It covers lists, tuples, dictionaries, and sets.",\n      "topics": [\n        "Lists: Creation, Indexing, Slicing, Methods (append, insert, remove, etc.)",\n        "Tuples: Immutability, Creating and accessing tuples",\n        "Dictionaries: Key-value pairs, accessing values, methods (get, items, keys, values)",\n        "Sets: Unordered collections of unique elements, set operations (union, intersection, difference)",\n        "List Comprehensions"\n      ]\n    },\n    {\n      "chapterTitle": "Functions and Modules",\n      "chapterSummary": "This chapter delves into functions and modules, essential tools for organizing and reusing code.  It covers function definitions, arguments, return values, and importing modules.",\n      "topics": [\n        "Defining Functions: Parameters, Return Values, Docstrings",\n        "Scope and Lifetime of Variables",\n        "Lambda Functions (Anonymous Functions)",\n        "Modules and Packages: Importing and Using Modules",\n        "Built-in Functions and Modules (math, random, etc.)",\n        "Creating your own modules"\n      ]\n    },\n    {\n      "chapterTitle": "Object-Oriented Programming (OOP)",\n      "chapterSummary": "This chapter provides an introduction to object-oriented programming principles, including classes, objects, inheritance, and polymorphism.  It covers the basics of OOP in Python.",\n      "topics": [\n        "Classes and Objects: Defining classes, creating objects (instances)",\n        "Attributes and Methods",\n        "Constructors (__init__)",\n        "Inheritance: Extending classes",\n        "Polymorphism: Method overriding",\n        "Encapsulation"\n      ]\n    },\n    {\n      "chapterTitle": "File Handling and Exception Handling",\n      "chapterSummary": "This chapter covers working with files (reading and writing) and handling exceptions to gracefully manage errors in your programs.",\n      "topics": [\n        "Opening, Reading, and Writing Files",\n        "Different File Modes",\n        "Working with CSV and JSON files",\n        "Exception Handling: try-except blocks",\n        "Common Exception Types",\n        "Raising Exceptions"\n      ]\n    },\n    {\n      "chapterTitle": "Working with Libraries (NumPy and Pandas - Basics)",\n      "chapterSummary": "This chapter introduces the basics of NumPy and Pandas, powerful libraries for numerical and data manipulation. This is a basic introduction, focusing on core functionality.",\n      "topics": [\n        "NumPy: Arrays, Array operations, basic linear algebra",\n        "Pandas: Series, DataFrames, Data manipulation (filtering, sorting)",\n        "Reading data from files into Pandas DataFrames (CSV, etc.)"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const generateNotesAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate exam material detail content for each chapter. Make sure to include all topic points in the content. Make sure to give content in HTML format (Do not add HTML, Head, Body, title tag). The content should be structured and informative. The chapters :  \"chapterTitle\": \"Advanced Data Structures\",\n      \"chapterSummary\": \"This chapter explores advanced data structures beyond the basics, focusing on their complexities and applications in problem-solving.\",\n      \"topics\": [\n        \"Advanced Tree Structures (AVL Trees, Red-Black Trees, B-Trees)\",\n        \"Tries (Prefix Trees)\",\n        \"Heaps (Binary Heaps, Fibonacci Heaps)\",\n        \"Hash Tables (Open Addressing, Separate Chaining)\",\n        \"Disjoint-Set Data Structures\",\n        \"Bloom Filters\"\n      ]\n    },"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```html\n<h3>Advanced Data Structures</h3>\n\n<p>This chapter delves into advanced data structures, examining their complexities and practical applications in algorithm design and problem-solving.  We will move beyond basic structures like arrays and linked lists to explore more sophisticated tools for efficient data management.</p>\n\n<h4>Advanced Tree Structures (AVL Trees, Red-Black Trees, B-Trees)</h4>\n<ul>\n  <li><strong>AVL Trees:</strong> Definition, properties (height-balanced), insertion, deletion, rotation operations, time complexity analysis (search, insertion, deletion – O(log n)).  Examples of applications where balanced trees are preferred.</li>\n  <li><strong>Red-Black Trees:</strong> Definition, properties (self-balancing), insertion, deletion, recoloring operations, time complexity analysis (search, insertion, deletion – O(log n)). Comparison with AVL trees: strengths and weaknesses.</li>\n  <li><strong>B-Trees:</strong> Definition, properties (multi-way tree, suitable for disk-based storage), insertion, deletion, splitting and merging nodes, time complexity analysis (search, insertion, deletion – O(log n)). Applications in database indexing and file systems.</li>\n</ul>\n\n<h4>Tries (Prefix Trees)</h4>\n<ul>\n  <li><strong>Definition and Structure:</strong> Explanation of trie structure, nodes representing prefixes, applications in auto-completion, spell-checking.</li>\n  <li><strong>Insertion and Search Operations:</strong> Detailed algorithms for inserting and searching words in a trie. Time complexity analysis (average and worst-case scenarios).</li>\n  <li><strong>Variations:</strong>  Discussion of different types of tries (e.g., compressed tries) and their respective advantages.</li>\n</ul>\n\n<h4>Heaps (Binary Heaps, Fibonacci Heaps)</h4>\n<ul>\n  <li><strong>Binary Heaps:</strong> Definition (min-heap, max-heap), heap property, implementation using arrays, heapify operation, insertion, deletion (extract-min/max), time complexity analysis (heapify – O(n), insertion/deletion – O(log n)). Applications in priority queues and heapsort.</li>\n  <li><strong>Fibonacci Heaps:</strong> Definition, structure (potential function, amortized analysis), insertion, deletion, decrease-key, extract-min operations, time complexity analysis (amortized time complexities). Comparison with binary heaps: when Fibonacci heaps are advantageous.</li>\n</ul>\n\n<h4>Hash Tables (Open Addressing, Separate Chaining)</h4>\n<ul>\n  <li><strong>Basic Concepts:</strong> Hash functions, collision handling, load factor.</li>\n  <li><strong>Open Addressing:</strong> Linear probing, quadratic probing, double hashing. Analysis of clustering and performance implications.</li>\n  <li><strong>Separate Chaining:</strong> Using linked lists or other data structures to handle collisions. Analysis of performance in different scenarios.</li>\n  <li><strong>Performance Analysis:</strong>  Average-case and worst-case time complexities for search, insertion, and deletion operations in both open addressing and separate chaining.</li>\n</ul>\n\n<h4>Disjoint-Set Data Structures</h4>\n<ul>\n  <li><strong>Union-Find Algorithm:</strong>  Explanation of the Union-Find data structure and its operations (union, find).  Different implementations (e.g., using trees with path compression and union by rank).</li>\n  <li><strong>Time Complexity Analysis:</strong> Amortized time complexity of union and find operations.  Importance in applications like Kruskal's algorithm.</li>\n  <li><strong>Applications:</strong>  Examples of applications in graph algorithms and other areas.</li>\n</ul>\n\n<h4>Bloom Filters</h4>\n<ul>\n  <li><strong>Definition and Structure:</strong> Explanation of Bloom filter structure and its probabilistic nature.</li>\n  <li><strong>Insertion and Lookup Operations:</strong>  Algorithms for inserting elements and checking for membership (false positives). Analysis of false positive probability.</li>\n  <li><strong>Applications:</strong>  Examples of applications, such as spell checkers, databases, and caching systems.</li>\n  <li><strong>Space Efficiency:</strong>  Discussion of the space advantages of Bloom filters compared to other data structures.</li>\n</ul>\n```\n"},
      ],
    },
  ],
});


// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
