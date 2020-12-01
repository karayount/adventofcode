require './bathroom_code.rb'
require './input/reader.rb'

reader = Reader.new
example_input = ['ULL', 'RRDDD', 'LURDL', 'UUUUD']
txt_input = reader.read_input_to_array('./input/day_02_input.txt')

describe 'BathroomCode' do
  describe '#numerical_keypad_code' do
    it 'example' do
      bathroom_code = BathroomCode.new(example_input)
      expect(bathroom_code.numerical_keypad_code).to eql('1985')
    end

    it 'day 2 part 1' do
      bathroom_code = BathroomCode.new(txt_input)
      expect(bathroom_code.numerical_keypad_code).to eql('36629')
    end
  end

  describe '#fancy_keypad_code' do
    it 'example' do
      bathroom_code = BathroomCode.new(example_input)
      expect(bathroom_code.fancy_keypad_code).to eql('5DB3')
    end

    it 'day 2 part 2' do
      bathroom_code = BathroomCode.new(txt_input)
      expect(bathroom_code.fancy_keypad_code).to eql('99C3D')
    end
  end
end