export const patterns = [
  { name: "Two Pointers", color: "bg-blue-100 text-blue-800" },
  { name: "Sliding Window", color: "bg-green-100 text-green-800" },
  { name: "Binary Search", color: "bg-purple-100 text-purple-800" },
  { name: "Stack", color: "bg-orange-100 text-orange-800" },
  { name: "HashMap", color: "bg-red-100 text-red-800" },
  { name: "XOR Trick", color: "bg-yellow-100 text-yellow-800" },
  { name: "Prefix/Suffix Arrays", color: "bg-indigo-100 text-indigo-800" },
  { name: "Kadane's Algorithm (DP)", color: "bg-pink-100 text-pink-800" },
  { name: "Boyer-Moore Voting", color: "bg-teal-100 text-teal-800" },
  { name: "Brute Force → Optimization", color: "bg-gray-100 text-gray-800" },
  { name: "Simple Traversal", color: "bg-cyan-100 text-cyan-800" },
  { name: "In-place swap", color: "bg-emerald-100 text-emerald-800" },
  { name: "3-way partitioning", color: "bg-amber-100 text-amber-800" },
  { name: "HashSet", color: "bg-rose-100 text-rose-800" },
  { name: "Shrinking Window", color: "bg-lime-100 text-lime-800" },
  { name: "Binary Search Variation", color: "bg-violet-100 text-violet-800" },
  { name: "Binary Search on Rotation", color: "bg-fuchsia-100 text-fuchsia-800" },
  { name: "Horizontal/Vertical Scanning", color: "bg-sky-100 text-sky-800" },
  { name: "Reverse Sections", color: "bg-stone-100 text-stone-800" },
  { name: "Floyd's Cycle Detection", color: "bg-slate-100 text-slate-800" },
  { name: "Math Trick", color: "bg-zinc-100 text-zinc-800" }
];

export const questions = [
  {
    day: 1,
    title: "Day 1: Warm-Up Basics",
    questions: [
      {
        id: 1,
        title: "Reverse an Array",
        pattern: "Two Pointers (Introduction)",
        company: "TCS",
        leetcodeLink: "https://leetcode.com/problems/reverse-string/",
        patternColor: "bg-blue-100 text-blue-800"
      },
      {
        id: 2,
        title: "Find the Maximum and Minimum in Array",
        pattern: "Brute Force → Optimization",
        company: null,
        leetcodeLink: "https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1",
        patternColor: "bg-gray-100 text-gray-800"
      }
    ]
  },
  {
    day: 2,
    title: "Day 2: Sorting and Basics",
    questions: [
      {
        id: 3,
        title: "Check if Array is Sorted and Rotated",
        pattern: "Simple Traversal",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
        patternColor: "bg-cyan-100 text-cyan-800"
      },
      {
        id: 4,
        title: "Remove Duplicates from Sorted Array",
        pattern: "Two Pointers",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        patternColor: "bg-blue-100 text-blue-800"
      }
    ]
  },
  {
    day: 3,
    title: "Day 3: Two Pointers Continued",
    questions: [
      {
        id: 5,
        title: "Move Zeroes to End",
        pattern: "Two Pointers (In-place swap)",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/move-zeroes/",
        patternColor: "bg-emerald-100 text-emerald-800"
      },
      {
        id: 6,
        title: "Is String a Palindrome?",
        pattern: "Two Pointers",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/valid-palindrome/",
        patternColor: "bg-blue-100 text-blue-800"
      }
    ]
  },
  {
    day: 4,
    title: "Day 4: Two Pointers (Interview Favorites)",
    questions: [
      {
        id: 7,
        title: "Sort 0s, 1s, 2s (Dutch National Flag)",
        pattern: "Two Pointers (3-way partitioning)",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/sort-colors/",
        patternColor: "bg-amber-100 text-amber-800"
      },
      {
        id: 8,
        title: "Container With Most Water",
        pattern: "Two Pointers",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/container-with-most-water/",
        patternColor: "bg-blue-100 text-blue-800"
      }
    ]
  },
  {
    day: 5,
    title: "Day 5: Sliding Window (Intro)",
    questions: [
      {
        id: 9,
        title: "Maximum Sum Subarray of Size K",
        pattern: "Sliding Window",
        company: null,
        leetcodeLink: "https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1",
        patternColor: "bg-green-100 text-green-800"
      },
      {
        id: 10,
        title: "Longest Substring Without Repeating Characters",
        pattern: "Sliding Window + HashSet",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        patternColor: "bg-rose-100 text-rose-800"
      }
    ]
  },
  {
    day: 6,
    title: "Day 6: Sliding Window (Advanced)",
    questions: [
      {
        id: 11,
        title: "Minimum Size Subarray Sum",
        pattern: "Sliding Window (Shrinking Window)",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/minimum-size-subarray-sum/",
        patternColor: "bg-lime-100 text-lime-800"
      },
      {
        id: 12,
        title: "Replace 0s to Maximize Consecutive 1s",
        pattern: "Sliding Window",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/max-consecutive-ones-iii/",
        patternColor: "bg-green-100 text-green-800"
      }
    ]
  },
  {
    day: 7,
    title: "Day 7: Binary Search Basics",
    questions: [
      {
        id: 13,
        title: "Binary Search on Sorted Array",
        pattern: "Binary Search",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/binary-search/",
        patternColor: "bg-purple-100 text-purple-800"
      },
      {
        id: 14,
        title: "First and Last Position of Element in Sorted Array",
        pattern: "Binary Search Variation",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        patternColor: "bg-violet-100 text-violet-800"
      }
    ]
  },
  {
    day: 8,
    title: "Day 8: Binary Search (Tricky Ones)",
    questions: [
      {
        id: 15,
        title: "Search in Rotated Sorted Array",
        pattern: "Binary Search on Rotation",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        patternColor: "bg-fuchsia-100 text-fuchsia-800"
      },
      {
        id: 16,
        title: "Find Peak Element in Array",
        pattern: "Binary Search",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/find-peak-element/",
        patternColor: "bg-purple-100 text-purple-800"
      }
    ]
  },
  {
    day: 9,
    title: "Day 9: Binary Search Applications",
    questions: [
      {
        id: 17,
        title: "Square Root of a Number (Floor Value)",
        pattern: "Binary Search",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/sqrtx/",
        patternColor: "bg-purple-100 text-purple-800"
      },
      {
        id: 18,
        title: "Find Minimum in Rotated Sorted Array",
        pattern: "Binary Search",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        patternColor: "bg-purple-100 text-purple-800"
      }
    ]
  },
  {
    day: 10,
    title: "Day 10: Strings (Manipulation Basics)",
    questions: [
      {
        id: 19,
        title: "Reverse Words in a String",
        pattern: "Two Pointers",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/reverse-words-in-a-string/",
        patternColor: "bg-blue-100 text-blue-800"
      },
      {
        id: 20,
        title: "Valid Parentheses",
        pattern: "Stack",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/valid-parentheses/",
        patternColor: "bg-orange-100 text-orange-800"
      }
    ]
  },
  {
    day: 11,
    title: "Day 11: Strings (Intermediate)",
    questions: [
      {
        id: 21,
        title: "Check if Two Strings are Anagrams",
        pattern: "HashMap / Sorting",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/valid-anagram/",
        patternColor: "bg-red-100 text-red-800"
      },
      {
        id: 22,
        title: "Longest Common Prefix",
        pattern: "Horizontal/Vertical Scanning",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/longest-common-prefix/",
        patternColor: "bg-sky-100 text-sky-800"
      }
    ]
  },
  {
    day: 12,
    title: "Day 12: Strings (Tricky)",
    questions: [
      {
        id: 23,
        title: "String Compression (Leetcode Easy)",
        pattern: "Two Pointers",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/string-compression/",
        patternColor: "bg-blue-100 text-blue-800"
      },
      {
        id: 24,
        title: "Subsequence Check",
        pattern: "Two Pointers",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/is-subsequence/",
        patternColor: "bg-blue-100 text-blue-800"
      }
    ]
  },
  {
    day: 13,
    title: "Day 13: Mixed Patterns",
    questions: [
      {
        id: 25,
        title: "Trapping Rain Water",
        pattern: "Two Pointers + Prefix/Suffix Array",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/",
        patternColor: "bg-indigo-100 text-indigo-800"
      },
      {
        id: 26,
        title: "Rotate Array by K Steps",
        pattern: "Reverse Sections",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/rotate-array/",
        patternColor: "bg-stone-100 text-stone-800"
      }
    ]
  },
  {
    day: 14,
    title: "Day 14: Company-Specific Favorites",
    questions: [
      {
        id: 27,
        title: "Find Duplicate in Array",
        pattern: "Floyd's Cycle Detection (Tortoise & Hare)",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/find-the-duplicate-number/",
        patternColor: "bg-slate-100 text-slate-800"
      },
      {
        id: 28,
        title: "Kadane's Algorithm (Maximum Subarray Sum)",
        pattern: "Dynamic Programming",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/maximum-subarray/",
        patternColor: "bg-pink-100 text-pink-800"
      }
    ]
  },
  {
    day: 15,
    title: "Day 15: Final Wrap-up",
    questions: [
      {
        id: 29,
        title: "Find Missing Number (0 to N)",
        pattern: "XOR/Math Trick",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/missing-number/",
        patternColor: "bg-zinc-100 text-zinc-800"
      },
      {
        id: 30,
        title: "Majority Element (>n/2 times)",
        pattern: "Boyer-Moore Voting Algorithm",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/majority-element/",
        patternColor: "bg-teal-100 text-teal-800"
      }
    ]
  }
]; 