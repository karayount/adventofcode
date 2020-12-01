require './bathroom_code.rb'
require './input/reader.rb'

reader = Reader.new

describe 'BathroomCode' do
  describe '#blocks_away' do
    it 'example' do
      input = ['R2', 'L3']
      bathroom_code = BathroomCode.new(input)
      expect(bathroom_code.blocks_away).to eql(1985)
    end
  
    it 'day 2 part 1' do
      input = reader.read_input_to_flattened_array('./input/day_2_input.txt')
  
      bathroom_code = BathroomCode.new(input)
      expect(bathroom_code.blocks_away).to eql(36629)
    end
  end

  describe '#first_to_visit_twice' do
    it 'example' do
      input = ['R8', 'R4', 'R4', 'R8']
      bathroom_code = BathroomCode.new(input)
      expect(bathroom_code.first_to_visit_twice).to eql(4)
    end
  
    it 'day 2 part 2' do
      input = reader.read_input_to_flattened_array('./input/day_2_input.txt')
  
      bathroom_code = BathroomCode.new(input)
      expect(bathroom_code.first_to_visit_twice).to eql(161)
    end
  end
end