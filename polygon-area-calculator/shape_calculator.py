class Rectangle:
  def __init__(self, width, height):
    """set width and height upon initialization"""
    self.width = width
    self.height = height

  def __repr__(self):
    """return string repr of instance"""
    return f'Rectangle(width={self.width}, height={self.height})'

  def set_width(self, width):
    """set a new width and return string repr of instance"""
    self.width = width
    return self

  def set_height(self, height):
    """set a new height and return string repr of instance"""
    self.height = height
    return self

  def get_area(self):
    """Calculate and return area"""
    return (self.width * self.height)

  def get_perimeter(self):
    """Calculate and return perimeter"""
    return (2* self.width + 2* self.height)

  def get_diagonal(self):
    """Calculate and return length of diagonal"""
    return (self.width ** 2 + self.height ** 2) ** .5

  def get_picture(self):
    """Create a picture of the representing height and width in *'s'"""
    if self.width > 50 or self.height > 50:
      return ("Too big for picture.")
    row = ("*" * self.width) + '\n'
    picture = row * self.height
    return picture

  def get_amount_inside(self, shape):
    """
    Calculate the number of the input shape instance that fits inside
    args: shape (Rectangle instance)
    """
    if shape.width > self.width or shape.height > self.height:
      return 0
    w = int(self.width / shape.width)
    h = int(self.height / shape.height)
    return w * h

class Square(Rectangle):
  def __init__(self, side):
    """set width and height from side length"""
    self.width = side
    self.height = side

  def __repr__(self):
      return f'Square(side={self.width})'

  def set_side(self, side):
    """Set side length and return string repr of instance"""
    self.width = side
    self.height = side
    return self
    