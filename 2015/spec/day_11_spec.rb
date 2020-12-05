require './day_11.rb'

describe 'Day11' do
  describe '#next_password' do
    it 'example' do
      day_11 = Day11.new()
      expect(day_11.next_password('abcdefgh')).to eql('abcdffaa')
      expect(day_11.next_password('ghijklmn')).to eql('ghjaabcc')
    end

    it 'day 11 part 1' do
      day_11 = Day11.new()
      expect(day_11.next_password('vzbxkghb')).to eql('vzbxxyzz')
    end
  end

  # describe '#fancy_keypad_code' do
  #   it 'example' do
  #     day_11 = Day11.new(example_input)
  #     expect(day_11.fancy_keypad_code).to eql('5DB3')
  #   end

  #   it 'day 11 part 2' do
  #     day_11 = Day11.new(txt_input)
  #     expect(day_11.fancy_keypad_code).to eql('99C3D')
  #   end
  # end
end