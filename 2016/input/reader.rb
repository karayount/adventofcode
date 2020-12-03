require 'set'

class Reader
  def read_input_to_flattened_array(file)
    f = File.open(file, "r")
    all = []

    f.each_line do |line|
      all << line.split(', ')
    end

    all.to_ary.flatten
  end

  def read_input_to_array(file)
    f = File.open(file, 'r')
    lines = []

    f.each_line do |line|
      lines << line
    end

    lines
  end

  def read_input_to_number_arrays(file)
    f = File.open(file, "r")
    all = []

    f.each_line do |line|
      nums = line.split
      nums = nums.map do |num|
        num.to_i
      end
      all.push(nums)
    end

    all
  end
end