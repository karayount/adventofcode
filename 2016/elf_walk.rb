class ElfWalk
  def initialize(input)
    @x = 0
    @y = 0
    @heading = 0
    @steps = input
    @visited = {}
  end

  def blocks_away
    @steps.each do |step|
      turn = step[0]
      step_count = step[1..-1].to_s.to_i
      move(turn, @heading, step_count, @x, @y)
    end

    @x.abs + @y.abs
  end

  def first_to_visit_twice
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
              return @x.abs + @y.abs
            end
            update_visits(@x, y+i)
          end
          @y += step_count
        when 1
          (1..step_count).each do |i|
            if @visited[x+i] && @visited[x+i].include?(@y)
              @x = x+i
              return @x.abs + @y.abs
            end
            update_visits(x+i, @y)
          end
          @x += step_count
        when 2
          (1..step_count).each do |i|
            if @visited[@x] && @visited[@x].include?(y-i)
              @y = y-i
              return @x.abs + @y.abs
            end
            update_visits(@x, y-i)
          end
          @y -= step_count
        when 3
          (1..step_count).each do |i|
            if @visited[@x-i] && @visited[x-i].include?(@y)
              @x = x-i
              return @x.abs + @y.abs
            end
            update_visits(x-i, @y)
          end
          @x -= step_count
      end
    end

    @x.abs + @y.abs
  end

  def update_visits(x, y)
    if @visited[x]
      @visited[x] << y
    else
      @visited[x] = [y]
    end
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
      heading == 0 ? 3 : heading - 1
    elsif turn == 'R'
      heading == 3 ? 0 : heading + 1
    end
  end
end
