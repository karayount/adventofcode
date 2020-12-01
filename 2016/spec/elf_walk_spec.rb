require './elf_walk.rb'
require './input/reader.rb'

reader = Reader.new

describe 'ElfWalk' do
  describe '#blocks_away' do
    it 'example 1' do
      input = ['R2', 'L3']
      elf_walk = ElfWalk.new(input)
      expect(elf_walk.blocks_away).to eql(5)
    end

    it 'example 1' do
      input = ['R2', 'R2', 'R2']
      elf_walk = ElfWalk.new(input)
      expect(elf_walk.blocks_away).to eql(2)
    end

    it 'example 1' do
      input = ['R5', 'L5', 'R5', 'R3']
      elf_walk = ElfWalk.new(input)
      expect(elf_walk.blocks_away).to eql(12)
    end
  
    it 'day 1 part 1' do
      input = reader.read_input_to_flattened_array('./input/day_1_input.txt')
  
      elf_walk = ElfWalk.new(input)
      expect(elf_walk.blocks_away).to eql(278)
    end
  end

  describe '#first_to_visit_twice' do
    it 'example' do
      input = ['R8', 'R4', 'R4', 'R8']
      elf_walk = ElfWalk.new(input)
      expect(elf_walk.first_to_visit_twice).to eql(4)
    end
  
    it 'day 1 part 2' do
      input = reader.read_input_to_flattened_array('./input/day_1_input.txt')
  
      elf_walk = ElfWalk.new(input)
      expect(elf_walk.first_to_visit_twice).to eql(161)
    end
  end
end