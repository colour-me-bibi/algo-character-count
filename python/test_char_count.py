# Can you translate this driver code to unit tests?

import unittest
from char_count import char_count


class TestCharCount(unittest.TestCase):
    def test_char_count(self):
        self.assertEqual(char_count("aaabbc"), [
            ["a", 3],
            ["b", 2],
            ["c", 1]
        ])
        self.assertEqual(char_count("an apple a day will keep the doctor away"), [
            ['a', 6],
            ['e', 4],
            ['p', 3],
            ['l', 3],
            ['d', 2],
            ['y', 2],
            ['w', 2],
            ['t', 2],
            ['o', 2],
            ['n', 1],
            ['i', 1],
            ['k', 1],
            ['h', 1],
            ['c', 1],
            ['r', 1],
        ])
