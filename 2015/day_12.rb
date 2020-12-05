require 'json'

class Day12
  def sum(file)
    f = File.open(file, "r")
    sum = 0
    f.each_line do |line|
      line.scan(/(?<=\D)(-?\d+)(?=\D)/).each do |cradled_digit|
        sum += cradled_digit[0].to_i
      end
    end

    sum
  end

  def ignore_red(file)
    f = File.open(file, "r")
    sum = 0
    f.each_line do |line|
      json = JSON.parse(line)
      sum += find_sum(json, sum)
    end

    sum
  end

  def find_sum(json, sum = 0)
    return 0 if json.is_a?(String)
    return json if json.is_a?(Integer)

    if json.is_a?(Array)
      json.each do |element|
        sum += find_sum(element)
      end
    end

    if json.is_a?(Hash)
      return 0 if json.has_value?('red')

      json.each_value do |value|
        sum += find_sum(value)
      end
    end

    sum
  end
end

# Ignore any object (and all of its children) which has any property with the value "red". Do this only for objects ({...}), not arrays ([...]).

#     [1,2,3] still has a sum of 6.
#     [1,{"c":"red","b":2},3] now has a sum of 4, because the middle object is ignored.
#     {"d":"red","e":[1,2,3,4],"f":5} now has a sum of 0, because the entire structure is ignored.
#     [1,"red",5] has a sum of 6, because "red" in an array has no effect.