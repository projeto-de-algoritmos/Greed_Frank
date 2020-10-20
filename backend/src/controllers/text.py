from heapq import heappush, heappop, heapify
from collections import defaultdict
from bitarray import bitarray


def convert_music(lyrics):
    converted_lyrics = []

    for line in lyrics:
        if line == '':
            text = '\n'
        else:
            text = encode_text(line)

        converted_lyrics.append(text)

    return converted_lyrics


def encode_text(text):

    freq_lib = defaultdict(int)
    for ch in text:
        freq_lib[ch] += 1

    heap = [[fq, [sym, ""]] for sym, fq in freq_lib.items()]

    heapify(heap)

    while len(heap) > 1:
        right = heappop(heap)
        left = heappop(heap)

        for pair in right[1:]:
            pair[1] = '0' + pair[1]
        for pair in left[1:]:
            pair[1] = '1' + pair[1]
        heappush(heap, [right[0] + left[0]] + right[1:] + left[1:])

    huffman_list = right[1:] + left[1:]
    huffman_dict = {a[0]: bitarray(str(a[1])) for a in huffman_list}

    encoded_text = bitarray()
    encoded_text.encode(huffman_dict, text)

    encoded = str(encoded_text)
    tam = len(encoded_text)
    encoded_text = encoded[10:tam-2]

    return encoded_text
