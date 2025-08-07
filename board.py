class Board:
    def __init__(self, height, width):
        self.height = height
        self.width = width
        self.slots = [[' '] * self.width for _ in range(self.height)]

    def __repr__(self):
        s = ''
        for row in range(self.height):
            s += '|'
            for col in range(self.width):
                s += self.slots[row][col] + '|'
            s += '\n'
        s += '-' * (self.width * 2 + 1) + '\n'
        s += ' ' + ' '.join(str(i % 10) for i in range(self.width)) + '\n'
        return s

    def add_checker(self, checker, col):
        assert checker in ['X', 'O']
        assert 0 <= col < self.width
        for row in range(self.height - 1, -1, -1):
            if self.slots[row][col] == ' ':
                self.slots[row][col] = checker
                break

    def reset(self):
        for row in range(self.height):
            for col in range(self.width):
                self.slots[row][col] = ' '

    def can_add_to(self, col):
        if not (0 <= col < self.width):
            return False
        return any(self.slots[row][col] == ' ' for row in range(self.height))

    def is_full(self):
        return all(not self.can_add_to(col) for col in range(self.width))

    def remove_checker(self, col):
        for row in range(self.height):
            if self.slots[row][col] != ' ':
                self.slots[row][col] = ' '
                break

    def is_horizontal_win(self, checker):
        for row in range(self.height):
            for col in range(self.width - 3):
                if all(self.slots[row][col+i] == checker for i in range(4)):
                    return True
        return False

    def is_vertical_win(self, checker):
        for col in range(self.width):
            for row in range(self.height - 3):
                if all(self.slots[row+i][col] == checker for i in range(4)):
                    return True
        return False

    def is_down_diagonal_win(self, checker):
        for row in range(self.height - 3):
            for col in range(self.width - 3):
                if all(self.slots[row+i][col+i] == checker for i in range(4)):
                    return True
        return False

    def is_up_diagonal_win(self, checker):
        for row in range(3, self.height):
            for col in range(self.width - 3):
                if all(self.slots[row-i][col+i] == checker for i in range(4)):
                    return True
        return False

    def is_win_for(self, checker):
        assert checker in ['X', 'O']
        return (
            self.is_horizontal_win(checker) or
            self.is_vertical_win(checker) or
            self.is_down_diagonal_win(checker) or
            self.is_up_diagonal_win(checker)
        )
