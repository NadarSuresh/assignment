from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in assignment/__init__.py
from assignment import __version__ as version

setup(
	name="assignment",
	version=version,
	description="Assignment",
	author="test",
	author_email="rajapandi.nadar007@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
