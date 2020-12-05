require './day_11.rb'

describe 'Day11' do
  it 'example' do
    day_11 = Day11.new()
    expect(day_11.next_password('abcdefgh')).to eql('abcdffaa')
    expect(day_11.next_password('ghijklmn')).to eql('ghjaabcc')
  end

  it 'day 11 part 1' do
    day_11 = Day11.new()
    expect(day_11.next_password('vzbxkghb')).to eql('vzbxxyzz')
  end

  it 'day 11 part 2' do
    day_11 = Day11.new()
    expect(day_11.next_password('vzbxxyzz')).to eql('vzcaabcc')
  end
end