require './security.rb'
require './input/reader.rb'

reader = Reader.new
txt_input = reader.read_input_to_rooms('./input/day_04_input.txt')

describe 'Security' do
  describe '#filter_decoys' do
    it 'example' do
      security = Security.new([[5, 10, 25]])
      expect(security.filter_decoys).to eql(0)
    end

    it 'day 4 part 1' do
      security = Security.new(txt_input)
      expect(security.filter_decoys).to eql(1050)
    end
  end

  describe '#decrypt' do
    it 'example' do
      security = Security.new([[101, 301, 501],
        [102, 302, 502],
        [103, 303, 503],
        [201, 401, 601],
        [202, 402, 602],
        [203, 403, 603]])
      expect(security.decrypt).to eql(6)
    end

    it 'day 4 part 2' do
      security = Security.new(txt_input)
      expect(security.decrypt).to eql(1921)
    end
  end
end