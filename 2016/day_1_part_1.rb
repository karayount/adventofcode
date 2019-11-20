class ElfWalk
  def initialize
    @x = 0
    @y = 0
    @heading = 0
    @steps = read_input
  end

  def read_input
    f = File.open('day_1_input.txt', "r")
    steps = []

    f.each_line do |line|
      steps << line.split(', ')
    end

    steps.to_ary.flatten
  end

  def blocks_away
    @steps.each do |step|
      turn = step[0]
      step_count = step[1..-1].to_s.to_i
      move(turn, @heading, step_count, @x, @y)
    end

    return @x, @y
  end

  def move(turn, heading, step_count, x, y)
    @heading = which_way(turn, heading)
    case @heading
      when 0 # north
        @y = y + step_count
      when 1 # east
        @x = x + step_count
      when 2 # south
        @y = y - step_count
      when 3 # west
        @x = x - step_count
    end
  end

  def which_way(turn, heading)
    if turn == 'L'
      if heading == 0
        3
      else
        heading - 1
      end
    elsif turn == 'R'
      if heading == 3
        0
      else
        heading + 1
      end
    end
  end
end

go_time = ElfWalk.new
puts go_time.blocks_away
