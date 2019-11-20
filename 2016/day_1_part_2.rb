class ElfWalk
  def initialize
    @x = 0
    @y = 0
    @heading = 0
    @steps = read_input
    @visited = {}
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
      @heading = which_way(turn, @heading)

      x = @x
      y = @y

      case @heading
        when 0
          (1..step_count).each do |i|
            if @visited[@x] && @visited[@x].include?(y+i)
              @y = y+i
              return @x, @y
            end
            update_visits(@x, y+i)
          end
          @y += step_count
        when 1
          (1..step_count).each do |i|
            if @visited[x+i] && @visited[x+i].include?(@y)
              @x = x+i
              return @x, @y
            end
            update_visits(x+i, @y)
          end
          @x += step_count
        when 2
          (1..step_count).each do |i|
            if @visited[@x] && @visited[@x].include?(y-i)
              @y = y-i
              return @x, @y
            end
            update_visits(@x, y-i)
          end
          @y -= step_count
        when 3
          (1..step_count).each do |i|
            if @visited[@x-i] && @visited[x-i].include?(@y)
              @x = x-i
              return @x, @y
            end
            update_visits(x-i, @y)
          end
          @x -= step_count
      end
    end

    return @x, @y
  end

  def update_visits(x, y)
    if @visited[x]
      @visited[x] << y
    else
      @visited[x] = [y]
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

go_walk = ElfWalk.new
puts go_walk.blocks_away
