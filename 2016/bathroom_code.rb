class BathroomCode
  def initialize(input)
    @position = 5
    @instructions = input
    @code = []
    @x = 2
    @y = 0
  end


  def move_numerical_keypad(direction)
    isAllTheWayLeft = @position % 3 == 1
    isAllTheWayRight = @position %3 == 0
    isAtTop = @position < 4
    isAtBottom = @position > 6

    if direction == 'L' && !isAllTheWayLeft
      @position -= 1
    elsif direction == 'R' && !isAllTheWayRight
      @position += 1
    elsif direction == 'U' && !isAtTop
      @position -= 3
    elsif direction == 'D' && !isAtBottom
      @position += 3
    end

    @position
  end

  def numerical_keypad_code
    @instructions.each do |directions|
      moves = directions.split('')
      moves.each do |direction|
        move_numerical_keypad(direction)
      end
      @code.push(@position)
    end

    @code.join('')
  end

  def move_fancy_keypad(direction)
    fancy_keypad = [
      [nil, nil, '1', nil, nil],
      [nil, '2', '3', '4', nil],
      ['5', '6', '7', '8', '9'],
      [nil, 'A', 'B', 'C', nil],
      [nil, nil, 'D', nil, nil]
    ]

    if direction == 'L' && @y > 0 && fancy_keypad[@x][@y-1]
      @position = fancy_keypad[@x][@y-1]
      @y -= 1
    elsif direction == 'R' && @y < 4 && fancy_keypad[@x][@y+1]
      @position = fancy_keypad[@x][@y+1]
      @y += 1
    elsif direction == 'U' && @x > 0 && fancy_keypad[@x-1][@y]
      @position = fancy_keypad[@x-1][@y]
      @x -= 1
    elsif direction == 'D' && @x < 4 && fancy_keypad[@x+1][@y]
      @position = fancy_keypad[@x+1][@y]
      @x += 1
    end

    @position
  end

  def fancy_keypad_code
    @instructions.each do |directions|
      moves = directions.split('')
      moves.each do |direction|
        move_fancy_keypad(direction)
      end
      @code.push(@position)
    end

    @code.join('')
  end
end
