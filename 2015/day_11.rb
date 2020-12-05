class Day11
  def initialize
    @alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  end

  def next_password(password)
    password = increment_pw(password)

    while !valid_pw?(password)
      password = increment_pw(password)
    end

    password
  end

  def increment_pw(password)
    chars = password.chars
    return @alphabet[@alphabet.index(chars[0]) + 1] if chars.length == 1

    if @alphabet[@alphabet.index(chars[-1]) + 1]
      chars[-1] = @alphabet[@alphabet.index(chars[-1]) + 1]
      return chars.join('')
    end

    return increment_pw(chars[0..-2].join('')) + 'a'
  end

  def valid_pw?(password)
    puts "checking #{password} for validity"
    return false if /[iol]/ =~ password
    letter_index = password.chars.map do |char|
      @alphabet.index(char)
    end
    return false unless includes_increasing_straight?(letter_index)
    return false unless contains_two_non_overlapping_pairs?(letter_index)
    true
  end

  def includes_increasing_straight?(letter_index)
    (0..letter_index.length-2).each do |i|
      if (letter_index[i+1] == letter_index[i] + 1) && (letter_index[i+2] == letter_index[i] + 2)
        return true
      end
    end

    false
  end

  def contains_two_non_overlapping_pairs?(letter_index)
    pair_count = 0
    (0..letter_index.length-2).each do |i|
      if (letter_index[i+1] == letter_index[i]) && (letter_index[i+2] != letter_index[i])
        pair_count += 1
      end
    end

    pair_count > 1
  end
end


# Unfortunately for Santa, a new Security-Elf recently started, and he has imposed some additional password requirements:

#     Passwords must include one increasing straight of at least three letters, like abc, bcd, cde, and so on, up to xyz.
#     They cannot skip letters; abd doesn't count.

#     Passwords must contain at least two different, non-overlapping pairs of letters, like aa, bb, or zz.

# For example:

#     hijklmmn meets the first requirement (because it contains the straight hij)
#       but fails the second requirement requirement (because it contains i and l).
#     abbceffg meets the third requirement (because it repeats bb and ff) but fails the first requirement.
#     abbcegjk fails the third requirement, because it only has one double letter (bb).
