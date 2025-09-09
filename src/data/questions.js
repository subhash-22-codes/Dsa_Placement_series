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
        title: "Valid Palindrome?",
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
        title: "Find Missing Number (0 to N)",
        pattern: "XOR/Math Trick",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/missing-number/",
        patternColor: "bg-zinc-100 text-zinc-800"
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
        title: "Rotate Array by K Steps",
        pattern: "Reverse Sections",
        company: null,
        leetcodeLink: "https://leetcode.com/problems/rotate-array/",
        patternColor: "bg-stone-100 text-stone-800"
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

export const homeworkQuestions = [
  {
    concept: "Two Pointers",
    color: "bg-blue-100 text-blue-800",
    description: "Master the two pointers technique with these carefully selected problems",
    questions: [
      {
        id: "hw-1",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        description: "You are given an array where the ith element is the price of a stock on day i. Find the maximum profit you can achieve from a single buy-sell transaction. If no profit is possible, return 0.",
        companies: ["Amazon", "Google", "Microsoft", "Facebook", "Apple"], // frequently asked in coding interviews
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },
      {
        id: "hw-2",
        title: "Remove Element",
        difficulty: "Easy",
        leetcodeLink: "https://leetcode.com/problems/remove-element/",
        description: "Given an integer array nums and an integer val, remove all occurrences of val in-place and return the new length. The order of elements may be changed, and it doesn't matter what you leave beyond the returned length.",
        companies: ["Amazon", "Microsoft", "Adobe"], // reported from entry-level interviews
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },      
      {
        id: "hw-3",
        title: "Two Sum",
        difficulty: "Easy",
        leetcodeLink: "https://leetcode.com/problems/two-sum/",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume each input would have exactly one solution, and you may not use the same element twice.",
        companies: ["Amazon", "Google", "Microsoft", "Facebook", "Apple"], // confirmed from multiple interview reports
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
      },
      {
        id: "hw-4",
        title: "3Sum",
        difficulty: "Medium",
        leetcodeLink: "https://leetcode.com/problems/3sum/",
        description: "Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that i != j != k and nums[i] + nums[j] + nums[k] == 0.",
        companies: ["Amazon", "Google", "Microsoft", "Facebook", "Bloomberg"], // frequently reported in interview experiences
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1) // ignoring output space"
      }  
    ]
  },
  {
    concept: "Sliding Window",
    color: "bg-green-100 text-green-800",
    description: "Learn to solve problems efficiently using the sliding window technique",
    questions: [
      {
        id: "hw-5",
        title: "Maximum Average Subarray I",
        difficulty: "Easy",
        leetcodeLink: "https://leetcode.com/problems/maximum-average-subarray-i/",
        description: "Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. Return this value.",
        companies: ["Amazon", "Microsoft", "Adobe"], // asked in some easy OA rounds
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },      
      {
        id: "hw-6",
        title: "Max Consecutive Ones",
        difficulty: "Easy",
        leetcodeLink: "https://leetcode.com/problems/max-consecutive-ones/",
        description: "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
        companies: ["Amazon", "Microsoft", "Goldman Sachs"], // often asked in warm-up OA rounds
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },      
      {
        id: "hw-7",
        title: "Longest Repeating Character Replacement",
        difficulty: "Medium",
        leetcodeLink: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        description: "Given a string s and an integer k, return the length of the longest substring containing the same letter you can get after performing at most k character replacements.",
        companies: ["Amazon", "Microsoft", "Bloomberg", "Google"], // confirmed from interview reports & LeetCode Discuss
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
      },      
      {
        id: "hw-8",
        title: "Find All Anagrams in a String",
        difficulty: "Easy",
        leetcodeLink: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        description: "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.",
        companies: ["Amazon", "Microsoft", "Adobe"], // asked in entry to mid-level OA rounds
        timeComplexity: "O(n)",
        spaceComplexity: "O(1) // ignoring output space"
      },      
    ]
  },
  {
    concept: "Binary Search",
    color: "bg-purple-100 text-purple-800",
    description: "Master binary search variations and applications",
    questions: [
      {
        id: "hw-9",
        title: "Guess Number Higher or Lower",
        difficulty: "Easy",
        leetcodeLink: "https://leetcode.com/problems/guess-number-higher-or-lower/",
        description: "We are playing the Guess Game. The game picks a number between 1 and n. You have to guess which number it picked by using feedback from the guess API: -1 if your guess is higher, 1 if your guess is lower, and 0 if it's correct.",
        companies: ["Amazon", "Google", "Apple"], // reported in Amazon warm-up rounds and Google practice sets
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
      },      
      {
        id: "hw-10",
        title: "Search Insert Position",
        difficulty: "Easy",
        leetcodeLink: "https://leetcode.com/problems/search-insert-position/",
        description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
        companies: ["Amazon", "Google", "Microsoft"], // frequently seen in warm-up rounds and beginner interviews
        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
      },      
      {
        id: "hw-11",
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        leetcodeLink: "https://leetcode.com/problems/koko-eating-bananas/",
        description: "Koko loves to eat bananas. There are piles of bananas, and guards come back after h hours. Find the minimum integer eating speed k such that she can eat all the bananas before the guards return.",
        companies: ["Amazon", "Google", "Bloomberg"], // frequently reported in Amazon OA & Bloomberg interviews
        timeComplexity: "O(n log m) // n = number of piles, m = max pile size",
        spaceComplexity: "O(1)"
      },      
      {
        id: "hw-12",
        title: "Search in Rotated Sorted Array II",
        difficulty: "Medium",
        leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
        description: "You are given an integer array nums sorted in non-decreasing order that may contain duplicates. Find if a given target is in nums.",
        companies: ["Amazon", "Microsoft", "Google"], // appears in Amazon & Microsoft mid-level rounds
        timeComplexity: "O(log n) in average case, O(n) in worst case (when many duplicates)",
        spaceComplexity: "O(1)"
      },      
    ]
  },
  // {
  //   concept: "Stack",
  //   color: "bg-orange-100 text-orange-800",
  //   description: "Solve problems using stack data structure effectively",
  //   questions: [
  //     {
  //       id: "hw-13",
  //       title: "Valid Parentheses",
  //       difficulty: "Easy",
  //       leetcodeLink: "https://leetcode.com/problems/valid-parentheses/",
  //       description: "Determine if the input string is valid with matching brackets.",
  //       companies: ["Amazon", "Microsoft", "Google"],
  //       timeComplexity: "O(n)",
  //       spaceComplexity: "O(n)"
  //     },
  //     {
  //       id: "hw-14",
  //       title: "Min Stack",
  //       difficulty: "Medium",
  //       leetcodeLink: "https://leetcode.com/problems/min-stack/",
  //       description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
  //       companies: ["Amazon", "Microsoft", "Google"],
  //       timeComplexity: "O(1)",
  //       spaceComplexity: "O(n)"
  //     },
  //     {
  //       id: "hw-15",
  //       title: "Largest Rectangle in Histogram",
  //       difficulty: "Hard",
  //       leetcodeLink: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
  //       description: "Find the largest rectangle area in the histogram.",
  //       companies: ["Google", "Amazon", "Microsoft"],
  //       timeComplexity: "O(n)",
  //       spaceComplexity: "O(n)"
  //     },
  //     {
  //       id: "hw-16",
  //       title: "Evaluate Reverse Polish Notation",
  //       difficulty: "Medium",
  //       leetcodeLink: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
  //       description: "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
  //       companies: ["Amazon", "Microsoft", "Google"],
  //       timeComplexity: "O(n)",
  //       spaceComplexity: "O(n)"
  //     }
  //   ]
  // },
  // {
  //   concept: "HashMap",
  //   color: "bg-red-100 text-red-800",
  //   description: "Master hash table applications and optimizations",
  //   questions: [
  //     {
  //       id: "hw-17",
  //       title: "Two Sum",
  //       difficulty: "Easy",
  //       leetcodeLink: "https://leetcode.com/problems/two-sum/",
  //       description: "Find two numbers such that they add up to a specific target.",
  //       companies: ["Amazon", "Google", "Microsoft"],
  //       timeComplexity: "O(n)",
  //       spaceComplexity: "O(n)"
  //     },
  //     {
  //       id: "hw-18",
  //       title: "Group Anagrams",
  //       difficulty: "Medium",
  //       leetcodeLink: "https://leetcode.com/problems/group-anagrams/",
  //       description: "Group all the anagrams together.",
  //       companies: ["Amazon", "Google", "Microsoft"],
  //       timeComplexity: "O(n * k log k)",
  //       spaceComplexity: "O(n * k)"
  //     },
  //     {
  //       id: "hw-19",
  //       title: "Longest Consecutive Sequence",
  //       difficulty: "Medium",
  //       leetcodeLink: "https://leetcode.com/problems/longest-consecutive-sequence/",
  //       description: "Find the length of the longest consecutive elements sequence.",
  //       companies: ["Google", "Amazon", "Microsoft"],
  //       timeComplexity: "O(n)",
  //       spaceComplexity: "O(n)"
  //     },
  //     {
  //       id: "hw-20",
  //       title: "Subarray Sum Equals K",
  //       difficulty: "Medium",
  //       leetcodeLink: "https://leetcode.com/problems/subarray-sum-equals-k/",
  //       description: "Find the total number of continuous subarrays whose sum equals to k.",
  //       companies: ["Google", "Amazon", "Microsoft"],
  //       timeComplexity: "O(n)",
  //       spaceComplexity: "O(n)"
  //     }
  //   ]
  // }
]; 