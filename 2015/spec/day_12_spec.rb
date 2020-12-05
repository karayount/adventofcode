require './day_12.rb'

describe 'Day12' do
  describe '#sum' do
    it 'example' do
      day_12 = Day12.new()
      expect(day_12.sum('./input/day_12_example.txt')).to eql(45)
    end

    it 'day 12 part 1' do
      day_12 = Day12.new()
      expect(day_12.sum('./input/day_12_input.txt')).to eql(156366)
    end
  end

  describe '#ignore_red' do
    it 'example' do
      day_12 = Day12.new()
      expect(day_12.ignore_red('./input/day_12_example.txt')).to eql(28)
    end

    it 'day 12 part 2' do
      day_12 = Day12.new()
      expect(day_12.ignore_red('./input/day_12_input.txt')).to eql(96852)
    end
  end
end