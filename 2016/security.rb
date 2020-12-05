class Triangles
  def initialize(input)
    @trios = input
    @triangle_count = 0
  end

  def filter_decoys

  end

  def decrypt

  end

  def valid_triangle?(a, b, c)
    a + b > c && a + c > b && b + c > a
  end

  def count_triangles
    @trios.each do |trio|
      a, b, c = trio
      @triangle_count += valid_triangle?(a, b, c) ? 1 : 0
    end

    @triangle_count
  end

  def check_triplet(triplet)
    first_triangle = { a: triplet[0][0], b: triplet[1][0], c: triplet[2][0] }
    second = { a: triplet[0][1], b: triplet[1][1], c: triplet[2][1] }
    third = { a: triplet[0][2], b: triplet[1][2], c: triplet[2][2] }

    @triangle_count += valid_triangle?(first_triangle[:a], first_triangle[:b], first_triangle[:c]) ? 1 : 0
    @triangle_count += valid_triangle?(second[:a], second[:b], second[:c]) ? 1 : 0
    @triangle_count += valid_triangle?(third[:a], third[:b], third[:c]) ? 1 : 0
  end

  def count_vertical_trio_triangles
    triplet = []
    @trios.each do |trio|
      if triplet.length == 3
        check_triplet(triplet)
        triplet = [trio]
      else
        triplet << trio
      end
    end
    if triplet.length == 3
      check_triplet(triplet)
    end

    @triangle_count
  end
end
