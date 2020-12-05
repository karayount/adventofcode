require './triangles.rb'
require './input/reader.rb'

reader = Reader.new
txt_input = reader.read_input_to_number_arrays('./input/day_03_input.txt')

describe 'Triangles' do
  describe '#count_triangles' do
    it 'example' do
      triangles = Triangles.new([[5, 10, 25]])
      expect(triangles.count_triangles).to eql(0)
    end

    it 'day 3 part 1' do
      triangles = Triangles.new(txt_input)
      expect(triangles.count_triangles).to eql(1050)
    end
  end

  describe '#count_vertical_trio_triangles' do
    it 'example' do
      triangles = Triangles.new([[101, 301, 501],
        [102, 302, 502],
        [103, 303, 503],
        [201, 401, 601],
        [202, 402, 602],
        [203, 403, 603]])
      expect(triangles.count_vertical_trio_triangles).to eql(6)
    end

    it 'day 3 part 2' do
      triangles = Triangles.new(txt_input)
      expect(triangles.count_vertical_trio_triangles).to eql(1921)
    end
  end
end