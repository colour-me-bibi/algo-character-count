

from collections import Counter
from string import ascii_letters


def char_count(string):
    """
    This function returns a list of pairs of characters and their counts sorted lexically.

    Args:
        string (str): A string of characters.

    Returns:
        list[str]: A list of pairs of characters and their counts sorted lexically.
    """

    valid_chars = set(ascii_letters)

    chars = [char.lower() for char in string if char in valid_chars]
    counts = sorted(Counter(chars).items(), key=lambda x: x[1], reverse=True)

    return [[k, v] for k, v in counts]
